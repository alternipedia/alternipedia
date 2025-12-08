import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions as any)
  const s = session as any
  if (!s || !s.user?.email) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'POST') {
    const { revisionId } = req.body
    if (!revisionId) return res.status(400).json({ error: 'Missing revisionId' })

    try {
      const user = await prisma.user.findUnique({ where: { email: s.user.email } })
      if (!user) throw new Error('User not found')

      await prisma.revisionVote.create({
        data: {
          revision: { connect: { id: Number(revisionId) } },
          user: { connect: { id: user.id } },
          value: 1,
        },
      })

      return res.status(200).json({ ok: true })
    } catch (e: any) {
      if (e?.code === 'P2002') return res.status(409).json({ error: 'Already starred' })
      return res.status(500).json({ error: e?.message || 'Server error' })
    }

  } else if (req.method === 'DELETE') {
    const { revision } = req.query
    if (!revision) return res.status(400).json({ error: 'Missing revision' })

    try {
      const revisionId = Array.isArray(revision) ? revision[0] : revision
      const user = await prisma.user.findUnique({ where: { email: s.user.email } })
      if (!user) throw new Error('User not found')

      await prisma.revisionVote.delete({ where: { revisionId_userId: { revisionId: Number(revisionId), userId: user.id } } })
      return res.status(200).json({ ok: true })
    } catch (e: any) {
      return res.status(500).json({ error: e?.message || 'Server error' })
    }

  } else {
    res.setHeader('Allow', ['POST', 'DELETE'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
