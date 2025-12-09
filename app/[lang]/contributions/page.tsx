import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { ContributionsClient } from "./contributions-client"
import { Locale } from "@/lib/i18n/config"

export default async function ContributionsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    redirect(`/${resolvedParams.lang}`) // Or login page
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true },
  })

  if (!user) {
    redirect(`/${resolvedParams.lang}`)
  }

  const [edits, threads, comments] = await Promise.all([
    // Edits: revisions where user authored at least one block
    prisma.revision.findMany({
      where: {
        revisionBlocks: {
          some: {
            block: {
              authorId: user.id,
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
      include: {
        article: {
          select: { title: true, slug: true },
        },
        bias: {
          select: { name: true },
        },
        votes: {
          select: { value: true },
        },
      },
      take: 50,
    }),
    // Threads created by user
    prisma.thread.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: { createdAt: "desc" },
      include: {
        article: {
          select: { title: true, slug: true },
        },
        bias: {
          select: { name: true },
        },
        _count: {
          select: { comments: true },
        },
      },
      take: 50,
    }),
    // Comments by user
    prisma.threadComment.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: { createdAt: "desc" },
      include: {
        thread: {
          select: {
            id: true,
            title: true,
            bias: { select: { name: true } },
            article: { select: { slug: true } },
          },
        },
        _count: {
          select: { likes: true },
        },
      },
      take: 50,
    }),
  ])

  return (
    <ContributionsClient
      lang={resolvedParams.lang}
      edits={edits}
      threads={threads}
      comments={comments}
    />
  )
}
