'use server'

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { revalidatePath } from "next/cache";

export type ReportWithDetails = any;

export async function fetchReports({
  page = 0,
  pageSize = 20,
  status = 'PENDING',
}: {
  page?: number;
  pageSize?: number;
  status?: 'PENDING' | 'RESOLVED' | 'DISMISSED' | 'ALL';
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { moderatedBias: true },
  });

  if (!user) throw new Error("User not found");

  const whereClause: any = {};
  if (status !== 'ALL') {
    whereClause.status = status;
  }

  // RBAC Filter
  if (user.role === 'GLOBAL_ADMIN') {
    // No additional filters
  } else if (user.role === 'ADMIN') {
    if (!user.adminOfLang) throw new Error("Admin has no assigned language");

    whereClause.OR = [
      { thread: { language: user.adminOfLang } },
      { comment: { thread: { language: user.adminOfLang } } },
      { revision: { article: { language: user.adminOfLang } } },
    ];

  } else if (user.moderatedBias) {
    // Moderator: Filter by Bias AND Language
    const { biasId, language } = user.moderatedBias;

    whereClause.OR = [
      { thread: { biasId, language } },
      { comment: { thread: { biasId, language } } },
      { revision: { biasId, article: { language } } },
      { blob: { biasId } },
    ];
  } else {
    throw new Error("Unauthorized: Insufficient permissions");
  }

  const [reports, total] = await Promise.all([
    prisma.reports.findMany({
      where: whereClause,
      include: {
        reportedBy: { select: { name: true, image: true, email: true } },
        thread: {
          select: {
            id: true,
            title: true,
            language: true,
            biasId: true,
            content: true,
            violatesLaw: true,
            author: { select: { id: true, name: true, email: true } },
            article: { select: { slug: true } }
          }
        },
        comment: {
          include: {
            author: { select: { id: true, name: true, email: true } },
            thread: {
              select: {
                id: true,
                title: true,
                language: true,
                biasId: true,
                article: { select: { slug: true } }
              }
            }
          }
        },
        revision: {
          include: {
            article: { select: { title: true, language: true, slug: true } },
            bias: true,
            revisionBlocks: {
              take: 1,
              include: {
                block: {
                  include: {
                    author: { select: { id: true, name: true, email: true } }
                  }
                }
              }
            }
          }
        },
        blob: {
          include: {
            bias: true,
            uploadedBy: { select: { id: true, name: true, email: true } }
          }
        },
      },
      skip: page * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.reports.count({ where: whereClause }),
  ]);

  return { reports, total, pageCount: Math.ceil(total / pageSize) };
}

export async function resolveReport(reportId: number, newStatus: 'RESOLVED' | 'DISMISSED') {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({ where: { id: session.user.id }, include: { moderatedBias: true } });
  if (!user || user.role === 'USER') {
    if (!user?.moderatedBias) throw new Error("Unauthorized");
  }

  // Update Status
  const report = await prisma.reports.update({
    where: { id: reportId },
    data: { status: newStatus }
  });

  // If status is RESOLVED (UI "REMOVED"), automatically toggle law violation to TRUE
  if (newStatus === 'RESOLVED') {
    let entityId: number | undefined;
    let entityType: 'THREAD' | 'COMMENT' | 'REVISION' | 'BLOB' | undefined;

    if (report.threadId) { entityId = report.threadId; entityType = 'THREAD'; }
    else if (report.commentId) { entityId = report.commentId; entityType = 'COMMENT'; }
    else if (report.revisionId) { entityId = report.revisionId; entityType = 'REVISION'; }
    else if (report.blobId) { entityId = report.blobId; entityType = 'BLOB'; }

    if (entityId && entityType) {
      await toggleLawViolation({ entityId, entityType, isViolation: true });
    }
  }

  revalidatePath('/[lang]/admin', 'page');
}

export async function banUser({
  userId,
  biasId,
  reason,
  durationHours
}: {
  userId: string,
  biasId: number,
  reason: string,
  durationHours?: number
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Unauthorized");

  const currentUser = await prisma.user.findUnique({ where: { id: session.user.id }, include: { moderatedBias: true } });
  if (!currentUser) throw new Error("User not found");

  // Permission Check
  if (currentUser.role === 'GLOBAL_ADMIN') {
    // Can ban anyone
  } else if (currentUser.role === 'ADMIN') {
    // Can ban anyone in assigned language
  } else if (currentUser.moderatedBias) {
    if (currentUser.moderatedBias.biasId !== biasId) {
      throw new Error("You can only ban users within your assigned bias.");
    }
  } else {
    throw new Error("Unauthorized");
  }

  // Create Ban
  const expiresAt = durationHours ? new Date(Date.now() + durationHours * 60 * 60 * 1000) : null;

  const targetUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!targetUser || !targetUser.email) throw new Error("Target user email not found");

  await prisma.ban.create({
    data: {
      userEmail: targetUser.email,
      biasId,
      bannedByUserId: currentUser.id,
      reason,
      expiresAt
    }
  });

  revalidatePath('/[lang]/admin', 'page');
}

export async function toggleLawViolation({
  entityId,
  entityType,
  isViolation,
}: {
  entityId: number;
  entityType: 'THREAD' | 'COMMENT' | 'REVISION' | 'BLOB';
  isViolation: boolean;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { moderatedBias: true }
  });

  if (!user) throw new Error("User not found");

  let biasId: number | undefined;
  let language: any | undefined;

  // Fetch entity context
  if (entityType === 'THREAD') {
    const t = await prisma.thread.findUnique({ where: { id: entityId } });
    if (t) { biasId = t.biasId; language = t.language; }
  } else if (entityType === 'COMMENT') {
    const c = await prisma.threadComment.findUnique({ where: { id: entityId }, include: { thread: true } });
    if (c) { biasId = c.thread.biasId; language = c.thread.language; }
  } else if (entityType === 'REVISION') {
    const r = await prisma.revision.findUnique({ where: { id: entityId }, include: { article: true } });
    if (r) { biasId = r.biasId; language = r.article.language; }
  } else if (entityType === 'BLOB') {
    const b = await prisma.blob.findUnique({ where: { id: entityId } });
    if (b) { biasId = b.biasId; }
  }

  if (biasId === undefined) throw new Error("Entity not found");

  // Check RBAC
  if (user.role === 'GLOBAL_ADMIN') {
    // OK
  } else if (user.role === 'ADMIN') {
    if (language && (!user.adminOfLang || user.adminOfLang !== language)) {
      throw new Error("Unauthorized: Language mismatch");
    }
  } else if (user.moderatedBias) {
    if (user.moderatedBias.biasId !== biasId) throw new Error("Unauthorized: Bias mismatch");
    if (language && user.moderatedBias.language !== language) throw new Error("Unauthorized: Language mismatch");
  } else {
    throw new Error("Unauthorized");
  }

  const modBiasId = user.moderatedBias?.id;

  if (entityType === 'THREAD') {
    await prisma.thread.update({
      where: { id: entityId },
      data: { violatesLaw: isViolation, violationSetByUserId: modBiasId }
    });
  } else if (entityType === 'COMMENT') {
    await prisma.threadComment.update({
      where: { id: entityId },
      data: { violatesLaw: isViolation, violationSetByUserId: modBiasId }
    });
  } else if (entityType === 'REVISION') {
    await prisma.revision.update({
      where: { id: entityId },
      data: { violatesLaw: isViolation, violatesLawSetByUserId: modBiasId }
    });
  } else if (entityType === 'BLOB') {
    await prisma.blob.update({
      where: { id: entityId },
      data: { violatesLaw: isViolation, violatesLawSetByUserId: modBiasId }
    });
  }

  revalidatePath('/[lang]/admin', 'page');
}
