import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import wtf from "wtf_wikipedia";
import type { BlockType, Language } from "@prisma/client";
import { withRetry } from '@/lib/retry';

// Mapping from TipTap block types to DB BlockType enums
const blockTypeMapping: Record<string, BlockType> = {
  paragraph: "PARAGRAPH",
  heading: "HEADING",
  blockquote: "QUOTE",
  bulletList: "BULLET_LIST_ITEM",
  orderedList: "NUMBERED_LIST_ITEM",
  codeBlock: "CODE_BLOCK",
  table: "TABLE",
  image: "IMAGE",
  video: "VIDEO",
  audio: "AUDIO",
  // Add more mappings as needed
};

const blockTypeMappingReverse: Record<BlockType, string> = {
  PARAGRAPH: "paragraph",
  HEADING: "heading",
  QUOTE: "blockquote",
  BULLET_LIST_ITEM: "bulletList",
  NUMBERED_LIST_ITEM: "orderedList",
  CODE_BLOCK: "codeBlock",
  TABLE: "table",
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
  // Add more mappings as needed
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug, lang } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Missing slug param" });
  }

  if (!lang || typeof lang !== "string") {
    return res.status(400).json({ error: "Missing lang param" });
  }

  if (req.method === "GET") {
    const { bias } = await req.body;

    try {
      const allCategories = await withRetry(() => prisma.category.findMany({
        select: { name: true },
        orderBy: { name: "asc" },
      }));

      const latestRevision = await withRetry(() => prisma.revision.findFirst({
        where: {
          article: {
            slug: slug,
            language: lang.toUpperCase() as Language
          },
          bias: {
            name: bias
          }
        },
        orderBy: { createdAt: "desc" },
        include: {
          article: {
            include: {
              categories: { include: { category: true } },
            },
          },
          revisionBlocks: {
            include: { block: true },
            orderBy: { order: "asc" },
          },
        },
      }));

      if (!latestRevision) {
        return res.status(200).json({
          blocks: [],
          slug: slug,
          allCategories: allCategories.map(c => c.name)
        });
      }

      const blocks = latestRevision.revisionBlocks.map((rb) => rb.block);

      return res.status(200).json({
        articleId: latestRevision.articleId,
        revisionId: latestRevision.id,
        articleCategories: latestRevision.article.categories.map((c) => c.category.name),
        blocks: blocks.map((b) => ({
          type: blockTypeMappingReverse[b.type],
          content: b.content,
        })),
        slug: slug,
        createdAt: latestRevision.createdAt,
        allCategories: allCategories.map(c => c.name),
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error", debug: error });
    }
  } else if (req.method === "POST") {
    // Check authentication
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check its a valid request
    const { blocks, bias, lang, categories } = await req.body;
    if (!blocks || !Array.isArray(blocks)) {
      return res.status(400).json({ error: "Invalid blocks array" });
    }

    // Check user permissions
    const biasDb = await withRetry(() => prisma.bias.findUnique({
      where: { name: bias },
    }));
    if (!biasDb) {
      return res.status(400).json({ error: `Bias '${bias}' not found` });
    }

    const user = await withRetry(() => prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        moderatedBias: true,
        biasBans: true,
      },
    }));
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const banned = await withRetry(() => prisma.ban.findFirst({
      where: {
        biasId: biasDb.id,
        userEmail: user.email || '',
        expiresAt: { gt: new Date() },
      },
    }));
    if (banned) {
      return res.status(403).json({ error: "You are banned from editing this bias" });
    }

    // if the current user is not allowed to edit this bias, reject
    // if the current user is an admin of this language allow
    // if the current user is a moderator of this bias allow
    let allowEdit = false;
    if (user.role === "GLOBAL_ADMIN") {
      allowEdit = true;
    }
    if (user.role === "ADMIN" && user.adminOfLang === lang.toUpperCase() as Language) {
      allowEdit = true;
    }
    if (user.moderatedBias?.id === biasDb.id && user.moderatedBias.language === lang.toUpperCase() as Language) {
      allowEdit = true;
    }
    if (user.currentEditableBiasId === biasDb.id ) {
      allowEdit = true;
    }
    if (!allowEdit) {
      return res.status(403).json({ error: "You do not have permission to edit this bias" }); 
    }

    // Find or create the article
    let articleDb = await withRetry(() => prisma.article.findUnique({
      where: { slug_language: { slug: slug, language: lang.toUpperCase() as any } },
    }));

    if (!articleDb) {
      let valid = await wtf.fetch(slug, {
        lang: lang,
      });

      if (Array.isArray(valid)) {
        valid = valid[0];
      }

      if (!valid) {
        throw new Error("Article does not exist on Wikipedia");
      }

      articleDb = await withRetry(() => prisma.article.create({
        data: {
          title: valid.title() || 'Untitled',
          slug: slug,
          language: lang.toUpperCase(),
        },
      }));
    }

    const revisionBlocksData = await Promise.all(
      blocks.map(async (block: any, index: number) => {
        let blockRecord = await withRetry(() => prisma.block.findFirst({
          where: {
            content: { equals: block },
          },
        }));

        if (!blockRecord) {
          const dbBlockType = blockTypeMapping[block.type];

          if (!dbBlockType) {
            throw new Error(`Unsupported block type: ${block.type}`);
          }
          blockRecord = await withRetry(() => prisma.block.create({
            data: {
              type: dbBlockType,
              content: block,
              authorId: user.id,
            },
          }));
        }

        return {
          blockId: blockRecord.id,
          order: index,
        };
      })
    );

    const newRevision = await withRetry(() => prisma.revision.create({
      data: {
        articleId: articleDb.id,
        biasId: biasDb.id,
        revisionBlocks: {
          create: revisionBlocksData,
        },
      },
      include: {
        revisionBlocks: {
          include: { block: true },
          orderBy: { order: "asc" },
        },
      },
    }));

    // Handle categories
    if (categories && Array.isArray(categories)) {
      // Delete existing categories for this article for this bias only
      await withRetry(() => prisma.articleCategory.deleteMany({
        where: { articleId: articleDb.id, biasId: biasDb.id },
      }));

      // Find or create categories
      const categoryRecords = await Promise.all(
        categories.map(async (catName: string) => {
          let cat = await withRetry(() => prisma.category.findUnique({
            where: { name_language: { name: catName, language: lang.toUpperCase() as Language } },
          }));
          if (!cat) {
            cat = await withRetry(() => prisma.category.create({
              data: { name: catName, language: lang.toUpperCase() as Language },
            }));
          }
          return cat;
        })
      );

      // Create ArticleCategory links
      await withRetry(() => prisma.articleCategory.createMany({
        data: categoryRecords.map((cat) => ({
          articleId: articleDb.id,
          biasId: biasDb.id,
          categoryId: cat.id,
          addedByUserId: user.id,
        })),
      }));
    }


    return res.status(200).json({ success: true, revision: newRevision });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}