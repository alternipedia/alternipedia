import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { withRetry } from '@/lib/retry'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Language } from '@prisma/client'

// GET /api/threads?slug=some_slug&lang=en&bias=somebias
// POST /api/threads  { title, content, slug, lang, bias }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { slug, lang, bias } = req.query

      if (!slug || typeof slug !== 'string') return res.status(400).json({ error: 'Missing slug query param' })
      if (!lang || typeof lang !== 'string') return res.status(400).json({ error: 'Missing lang query param' })
      if (!bias || typeof bias !== 'string') return res.status(400).json({ error: 'Missing bias query param' })

      const article = await withRetry(() => prisma.article.findUnique({
        where: { slug_language: { slug: slug, language: lang.toUpperCase() as any } },
        select: { id: true },
      }));

      if (!article) return res.status(200).json({ threads: [] })

      const biasDb = await withRetry(() => prisma.bias.findUnique({ where: { name: String(bias) }, select: { id: true } }))
      if (!biasDb) return res.status(200).json({ threads: [] })

      const threads = await withRetry(() => prisma.thread.findMany({
        where: { articleId: article.id, biasId: biasDb.id },
        orderBy: { createdAt: 'desc' },
        include: { comments: true },
      }))

      const mapped = threads.map((t) => ({
        id: t.id,
        title: t.title,
        content: t.content,
        comments: (t.comments || []).map((c) => ({ id: c.id, content: c.content, authorId: c.authorId, createdAt: c.createdAt })),
        status: t.status,
        violatesLaw: !!t.violatesLaw,
        createdAt: t.createdAt,
      }))

      return res.status(200).json({ threads: mapped })
    }

    if (req.method === 'POST') {
      const body = req.body || {}
      const { title, content, slug, lang, bias } = body

      if (!title || typeof title !== 'string') return res.status(400).json({ error: 'Missing title' })
      if (title.length > 300) return res.status(400).json({ error: 'Title too long' })
      if (!content || typeof content !== 'string') return res.status(400).json({ error: 'Missing content' })
      if (content.length > 2000) return res.status(400).json({ error: 'Content too long' })
      if (!slug || typeof slug !== 'string') return res.status(400).json({ error: 'Missing slug' })
      if (!lang || typeof lang !== 'string') return res.status(400).json({ error: 'Missing lang' })
      if (!bias || typeof bias !== 'string') return res.status(400).json({ error: 'Missing bias' })

      const session = await getServerSession(req as any, res as any, authOptions as any) as any
      if (!session?.user?.email) return res.status(401).json({ error: 'Unauthorized' })

      const user = await withRetry(() => prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } }))
      if (!user) return res.status(401).json({ error: 'Unauthorized' })

      const article = await withRetry(() => prisma.article.findUnique({
        where: { slug_language: { slug: slug, language: lang.toUpperCase() as any } },
        select: { id: true },
      }))

      if (!article) return res.status(400).json({ error: 'Article not found' })

      const biasDb = await withRetry(() => prisma.bias.findUnique({ where: { name: String(bias) }, select: { id: true } }))
      if (!biasDb) return res.status(400).json({ error: 'Bias not found' })

      const created = await withRetry(() => prisma.thread.create({
        data: {
          articleId: article.id,
          biasId: biasDb.id,
          authorId: user.id,
          title: title.slice(0, 300),
          content: content.slice(0, 2000),
          language: lang.toUpperCase() as Language,
        },
      }))

      return res.status(201).json({ thread: { id: created.id, title: created.title, content: created.content, createdAt: created.createdAt } })
    }

    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ error: 'Internal server error', debug: String(err) })
  }
}
