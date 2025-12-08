
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // Assuming authOptions export location, usually in lib/auth or app/api/auth/[...nextauth]/route
import { prisma } from '@/lib/prisma'; // Assuming standard prisma client export

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { reason, type, id } = body;

    if (!reason || !type || !id) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (reason.length > 2000) {
      return NextResponse.json({ message: 'Reason too long' }, { status: 400 });
    }

    // Get user ID
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Check for existing report to prevent spam
    let existingReport;
    if (type === 'thread') {
      existingReport = await prisma.reports.findUnique({
        where: {
          reportedById_threadId: {
            reportedById: user.id,
            threadId: Number(id)
          }
        }
      });
    } else if (type === 'revision') {
      existingReport = await prisma.reports.findUnique({
        where: {
          reportedById_revisionId: {
            reportedById: user.id,
            revisionId: Number(id)
          }
        }
      });
    } else if (type === 'comment') {
      existingReport = await prisma.reports.findUnique({
        where: {
          reportedById_commentId: {
            reportedById: user.id,
            commentId: Number(id)
          }
        }
      });
    } else {
      return NextResponse.json({ message: 'Invalid report type' }, { status: 400 });
    }

    if (existingReport) {
      return NextResponse.json({ message: 'You have already reported this item.' }, { status: 409 });
    }

    // Create report
    let report;
    if (type === 'thread') {
      report = await prisma.reports.create({
        data: {
          reason,
          status: 'PENDING',
          reportedById: user.id,
          threadId: Number(id)
        }
      });
    } else if (type === 'revision') {
      report = await prisma.reports.create({
        data: {
          reason,
          status: 'PENDING',
          reportedById: user.id,
          revisionId: Number(id)
        }
      });
    } else if (type === 'comment') {
      report = await prisma.reports.create({
        data: {
          reason,
          status: 'PENDING',
          reportedById: user.id,
          commentId: Number(id)
        }
      });
    }

    return NextResponse.json({ message: 'Report submitted successfully', report }, { status: 201 });

  } catch (error: any) {
    console.error('Error submitting report:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
