import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { revision } = req.query
  if (!revision) return res.status(400).json({ error: 'Missing revision' })
  const revisionId = Array.isArray(revision) ? revision[0] : revision

  const session = await getServerSession(req, res, authOptions as any)
  const s = session as any
  if (!s || !s.user?.email) {
    // Not logged in — treat as not starred for clients
    return res.status(200).json({ starred: false })
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: s.user.email } })
    if (!user) return res.status(200).json({ starred: false })

    const vote = await prisma.revisionVote.findUnique({
      where: { revisionId_userId: { revisionId: Number(revisionId), userId: user.id } }
    });

    return res.status(200).json({ starred: !!vote })
  } catch (e: any) {
    console.error('stars/status error:', e)
    return res.status(500).json({ error: e?.message || 'Server error' })
  }
}
