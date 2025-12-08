import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { withRetry } from '@/lib/retry'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const body = req.body || {}
      const { threadId, content, newStatus } = body
      if (!threadId) return res.status(400).json({ error: 'Missing threadId' })
      if (!content || typeof content !== 'string') return res.status(400).json({ error: 'Missing content' })
      if (content.length > 2000) return res.status(400).json({ error: 'Content too long' })

      const session = await getServerSession(req as any, res as any, authOptions as any) as any
      if (!session?.user?.email) return res.status(401).json({ error: 'Unauthorized' })

      const user = await withRetry(() => prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true, role: true, adminOfLang: true, currentEditableBiasId: true } }))
      if (!user) return res.status(401).json({ error: 'Unauthorized' })

      const thread = await withRetry(() => prisma.thread.findUnique({ where: { id: Number(threadId) }, include: { article: { select: { language: true } }, bias: { select: { id: true } } } }))
      if (!thread) return res.status(400).json({ error: 'Thread not found' })

      let canComment = false;

      if (user.currentEditableBiasId === thread.bias.id) {
        canComment = true;
      }

      if (user.role === 'GLOBAL_ADMIN') {
        canComment = true;
      }

      if (user.role === "ADMIN" && user.adminOfLang === thread.article.language) {
        canComment = true;
      }

      if (!canComment) {
        return res.status(403).json({ error: 'You do not have permission to comment on this thread' })
      }

      // Create comment
      const created = await withRetry(() => prisma.threadComment.create({
        data: {
          threadId: Number(threadId),
          authorId: user.id,
          content: content.slice(0, 2000),
        }
      }))

      // If newStatus was provided, validate permission and update thread
      let updatedStatus: string | null = null
      if (newStatus && typeof newStatus === 'string') {
        // Determine permission
        let canModerate = false
        if (user.role === 'GLOBAL_ADMIN') canModerate = true
        if (user.adminOfLang && String(user.adminOfLang).toUpperCase() === String(thread.article.language).toUpperCase()) canModerate = true
        const mod = await withRetry(() => prisma.moderatorBias.findFirst({ where: { userId: user.id, biasId: thread.bias.id } }))
        if (mod) canModerate = true

        if (canModerate) {
          await withRetry(() => prisma.thread.update({ where: { id: Number(threadId) }, data: { status: newStatus as any } }))
          updatedStatus = newStatus
        }
      }

      const out = await withRetry(() => prisma.threadComment.findUnique({ where: { id: created.id }, include: { author: { select: { id: true, name: true } } } }))

      return res.status(201).json({ comment: out, updatedStatus })
    }

    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ error: 'Internal server error', debug: String(err) })
  }
}
