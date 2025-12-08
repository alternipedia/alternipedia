import ClientLoadedSignal from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/load-signal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/(components)/ui/breadcrumb";
import { prisma } from '@/lib/prisma'
import { withRetry } from '@/lib/retry'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import { Badge } from '@/app/(components)/ui/badge'
import { getDictionary } from '@/lib/i18n/dictionaries'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string; bias: string; id: string }> }) {
  const p = await params;
  const { lang, slug, bias, id } = p;

  // Load thread with comments, article and bias for permission checks
  const threadId = parseInt(id, 10)
  const thread = await withRetry(() => prisma.thread.findUnique({
    where: { id: threadId, bias: { name: String(bias) } },
    include: {
      author: { select: { id: true, name: true } },
      comments: { include: { author: { select: { id: true, name: true } } }, orderBy: { createdAt: 'asc' } },
      article: { select: { id: true, language: true } },
      bias: { select: { id: true, name: true } },
    }
  }))

  if (!thread) {
    return (
      <div className="wikipedia-article">
        <ClientLoadedSignal />
        <main className="py-6">Thread not found</main>
      </div>
    )
  }

  const dict = getDictionary(lang as any)

  function statusVariant(status?: string) {
    const s = String(status || '').toUpperCase()
    switch (s) {
      case 'OPEN': return 'default'
      case 'IN_REVIEW': return 'secondary'
      case 'RESOLVED': return 'outline'
      case 'DUPLICATE': return 'destructive'
      default: return 'default'
    }
  }

  const status = thread.status ?? 'OPEN'
  const commentsEnabled = status === 'OPEN' || status === 'IN_REVIEW'
  // Determine moderation permissions server-side so client doesn't need an extra fetch
  let canModerate = false
  try {
    const session = await getServerSession(authOptions as any) as any
    if (session?.user?.email) {
      const dbUser = await withRetry(() => prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true, role: true, adminOfLang: true } }))
      if (dbUser) {
        if (dbUser.role === 'GLOBAL_ADMIN') canModerate = true
        if (dbUser.adminOfLang && String(dbUser.adminOfLang).toUpperCase() === String(thread.article?.language).toUpperCase()) canModerate = true
        const mod = await withRetry(() => prisma.moderatorBias.findFirst({ where: { userId: dbUser.id, biasId: thread.bias?.id } }))
        if (mod) canModerate = true
      }
    }
  } catch (e) {
    console.error('Error checking moderation permissions', e)
  }

  return (
    <div className="wikipedia-article">
      <ClientLoadedSignal />

      <Breadcrumb>
        <BreadcrumbList className="rounded-md border bg-background px-3 py-2 shadow-xs">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${encodeURIComponent(lang)}/wiki/${encodeURIComponent(slug)}/${encodeURIComponent(bias)}`}>{decodeURIComponent(slug.replaceAll('_', ' '))}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${encodeURIComponent(lang)}/wiki/${encodeURIComponent(slug)}/${encodeURIComponent(bias)}?content=talk`}>Discussions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="cursor-default">{thread.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main className="py-6">
        <div className="space-y-4">
          <div className="rounded-md border bg-background p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h1 className="text-lg font-semibold break-words">{thread.title}</h1>
                <div className="text-sm text-muted-foreground">by {thread.author?.name ?? 'Unknown'} · {new Date(thread.createdAt).toLocaleString(lang || 'en')}</div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={statusVariant(thread.status)} className="px-2">{thread.status ?? 'UNKNOWN'}</Badge>
              </div>
            </div>

            {thread.content ? (
              <div className="mt-4 text-sm text-foreground whitespace-pre-wrap">{thread.content}</div>
            ) : null}
          </div>

          <section>
            <h2 className="text-sm font-medium mb-2">Comments</h2>
            <div className="space-y-3">
              {thread.comments && thread.comments.length ? (
                thread.comments.map((c: any) => (
                  <div key={c.id} className="rounded-md border bg-background p-3 mx-12">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{c.author?.name ?? 'Unknown'}</div>
                      <div className="text-xs text-muted-foreground">{new Date(c.createdAt).toLocaleString(lang || 'en')}</div>
                    </div>
                    <div className="mt-2 text-sm whitespace-pre-wrap">{c.content}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-muted-foreground">No comments yet.</div>
              )}
            </div>
          </section>

          <section>
            {commentsEnabled ? (
              <div className="mt-4">
                {/* @ts-ignore */}
                <ThreadComments threadId={thread.id} canModerate={canModerate} threadStatus={thread.status} />
              </div>
            ) : (
              <div className="rounded-md border bg-background p-3 text-sm text-muted-foreground">Comments are closed for this thread.</div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

// Import client component dynamically to avoid server-side rendering
// Import client comments component directly (this is a client component)
import ThreadComments from '@/app/[lang]/wiki/[slug]/[bias]/thread/[id]/(client-renders)/thread-comments'