"use client";

import { Alert, AlertDescription, AlertTitle } from '@/app/(components)/ui/alert';
import { useEffect, useId, useMemo, useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import { ExternalLink, TriangleAlert, ChevronLeftIcon, ChevronRightIcon, MessagesSquare } from 'lucide-react'
import { Badge } from '@/app/(components)/ui/badge'
import { Button } from '@/app/(components)/ui/button'
import { Label } from '@/app/(components)/ui/label'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/app/(components)/ui/select'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/app/(components)/ui/tooltip'
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogHeader, DialogTrigger, DialogClose } from '@/app/(components)/ui/dialog'
import { Input } from '@/app/(components)/ui/input'
import { Textarea } from '@/app/(components)/ui/textarea'
import { useSession } from 'next-auth/react';

type ThreadItem = {
  id: string
  title: string
  content?: string
  comments?: any[]
  status?: string
  violatesLaw?: boolean
  url?: string
  createdAt?: string
}

export default function Talk({ language, slug, bias }: { language: string; slug: string; bias: string }) {
  const id = useId()
  const params = useParams()
  const path = usePathname()
  const [data, setData] = useState<ThreadItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all')
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const { data: session, status } = useSession();

  // Extracted loader so we can call it after creating a thread as well
  async function loadThreads() {
    setLoading(true)
    setError(null)
    const slugVal = slug || params?.slug
    const lang = language || params?.lang || 'en'
    const biasVal = bias || (path?.split('/')[4] ?? '')
    try {
      if (!slugVal || !biasVal) {
        setData([])
        setLoading(false)
        return
      }

      const q = new URLSearchParams({ slug: String(slugVal), lang: String(lang), bias: String(biasVal) })
      const resp = await fetch(`/api/threads?${q.toString()}`)
      if (!resp.ok) throw new Error(`API error: ${resp.status}`)
      const body = await resp.json()
      const mapped: ThreadItem[] = (body.threads || []).map((t: any) => ({
        id: String(t.id),
        title: t.title,
        content: t.content,
        comments: t.comments || [],
        status: t.status,
        violatesLaw: !!t.violatesLaw,
        createdAt: t.createdAt,
        url: `/${encodeURIComponent(String(lang))}/wiki/${encodeURIComponent(String(slugVal))}/${encodeURIComponent(String(biasVal))}/thread/${t.id}`,
      }))
      setData(mapped);
    } catch (e: any) {
      console.error(e)
      setError(null)
      setData([]);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadThreads()
  }, [language, slug, bias, params, path])

  const filtered = useMemo(() => {
    if (filter === 'all') return data
    if (filter === 'open') return data.filter(d => String(d.status).toUpperCase() === 'OPEN' || String(d.status).toUpperCase() === 'IN_REVIEW')
    // closed: anything not OPEN
    return data.filter(d => String(d.status).toUpperCase() !== 'OPEN' && String(d.status).toUpperCase() !== 'IN_REVIEW')
  }, [data, filter])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const paginated = useMemo(() => {
    const start = pageIndex * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, pageIndex, pageSize])

  useEffect(() => {
    if (pageIndex >= pageCount) setPageIndex(Math.max(0, pageCount - 1))
  }, [pageCount, pageIndex])

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

  return (
    <div className="space-y-4">
      {loading ? (
        <>
          <Alert>
            <MessagesSquare />
            <AlertTitle>{bias.charAt(0).toUpperCase() + bias.slice(1)} Talk Page</AlertTitle>
            <AlertDescription>This is the talk page for discussing improvements to the {decodeURI(slug.replaceAll('_', ' '))} article.<br />
              <em>This is not a forum for general discussion of personal interests.</em></AlertDescription>
          </Alert>
          <div className="text-center text-sm text-muted-foreground mt-4">Loading threads…</div>
        </>
      ) : error ? (
        <>
          <Alert>
            <MessagesSquare />
            <AlertTitle>{bias.charAt(0).toUpperCase() + bias.slice(1)} Talk Page</AlertTitle>
            <AlertDescription>This is the talk page for discussing improvements to the {decodeURI(slug.replaceAll('_', ' '))} article.<br />
              <em>This is not a forum for general discussion of personal interests.</em></AlertDescription>
          </Alert>
          <div className="text-center text-sm text-red-500">{error}</div>
        </>
      ) : (
        <>
          <Alert>
            <MessagesSquare />
            <AlertTitle>{bias.charAt(0).toUpperCase() + bias.slice(1)} Talk Page</AlertTitle>
            <AlertDescription>This is the talk page for discussing improvements to the {decodeURI(slug.replaceAll('_', ' '))} article.<br />
              <em>This is not a forum for general discussion of personal interests.</em></AlertDescription>
          </Alert>

          <div className="flex items-start justify-between">
            {/* Left: Create new button */}
            <div className="flex items-center gap-2 my-auto">
              {status !== 'authenticated' && (
                <TooltipProvider delayDuration={0}>
                  <Tooltip persistOnClick={true}>
                    <TooltipTrigger asChild>
                      <Button size="sm" className='cursor-pointer' disabled={true}>
                        Create new
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 text-xs" side="top" withBackdrop={true} collisionPadding={8} showArrow={true}>
                      You must be logged in to create a new thread.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {status === 'authenticated' && (
                <Dialog open={isDialogOpen} onOpenChange={(o) => setIsDialogOpen(o)}>
                  <DialogTrigger asChild>
                    <Button size="sm" className='cursor-pointer' disabled={status !== 'authenticated'}>
                      Create new
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl">
                    <DialogHeader>
                      <DialogTitle>Create new thread</DialogTitle>
                      <DialogDescription>Start a new discussion about improvements to this article.</DialogDescription>
                    </DialogHeader>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setFormError(null)
                        const titleTrim = newTitle.trim()
                        const contentTrim = newContent.trim()
                        if (!titleTrim) { setFormError('Title is required'); return }
                        if (titleTrim.length > 300) { setFormError('Title must be 300 characters or fewer'); return }
                        if (!contentTrim) { setFormError('Content is required'); return }
                        if (contentTrim.length > 2000) { setFormError('Content must be 2000 characters or fewer'); return }

                        setSubmitting(true);
                        try {
                          const slugVal = slug || params?.slug
                          const lang = language || params?.lang || 'en'
                          const biasVal = bias || (path?.split('/')[4] ?? '')
                          const resp = await fetch('/api/threads', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ title: titleTrim, content: contentTrim, slug: slugVal, lang, bias: biasVal })
                          });
                          if (!resp.ok) {
                            const body = await resp.json().catch(() => ({}))
                            throw new Error(body?.message || `API error: ${resp.status}`)
                          }

                          // success: close modal, reset and reload
                          setIsDialogOpen(false);
                          setNewTitle('');
                          setNewContent('');
                          await loadThreads();
                        } catch (err: any) {
                          console.error(err);
                          setFormError(err?.message || 'Failed to create thread');
                        } finally {
                          setSubmitting(false);
                        }
                      }}
                    >
                      <div className="grid gap-2">
                        {/* <Label htmlFor={`new-title-${id}`}>Title</Label> */}
                        <Input id={`new-title-${id}`} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} maxLength={300} placeholder="Title (max 300 chars)" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <div />
                          <div>{newTitle.length}/300</div>
                        </div>

                        {/* <Label htmlFor={`new-content-${id}`}>Content</Label> */}
                        <Textarea id={`new-content-${id}`} value={newContent} onChange={(e) => setNewContent(e.target.value)} maxLength={2000} placeholder="Describe the issue or suggested change (max 2000 chars)" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <div />
                          <div>{newContent.length}/2000</div>
                        </div>

                        {formError ? <div className="text-sm text-red-500">{formError}</div> : null}

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline" type="button" className='cursor-pointer'>Cancel</Button>
                          </DialogClose>
                          <Button type="submit" disabled={submitting} className='cursor-pointer'>
                            {submitting ? 'Creating…' : 'Create'}
                          </Button>
                        </DialogFooter>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            {/* Right: filter dropdown stays right-aligned */}
            <div className="flex items-center gap-2">
              <Label htmlFor={`filter-${id}`} className="hidden">Filter</Label>
              <Select value={filter} onValueChange={(v) => { setFilter(v as any); setPageIndex(0) }}>
                <SelectTrigger id={`filter-${id}`} className="w-44">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border bg-background">
            {paginated.length ? (
              <ul className="divide-y">
                {paginated.map((t) => (
                  <li key={t.id} className={`w-full ${t.violatesLaw ? 'opacity-40 pointer-events-none' : ''}`}>
                    <div className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground">{t.title}</div>
                        {t.content ? <div className="text-sm text-muted-foreground truncate">{t.content}</div> : null}
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge variant={statusVariant(t.status)} className="px-2 cursor-default">{t.status ?? 'UNKNOWN'}</Badge>
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button aria-label="Report thread" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-mute cursor-pointer">
                                <TriangleAlert />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="px-2 py-1 text-xs" showArrow>Report</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        {t.url ? (
                          <TooltipProvider delayDuration={0}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a href={t.url} aria-label="Open thread" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-muted">
                                  <ExternalLink />
                                </a>
                              </TooltipTrigger>
                              <TooltipContent className="px-2 py-1 text-xs" showArrow>Open</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-6 text-center text-sm text-muted-foreground">No threads.</div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Label htmlFor={id}>Rows per page</Label>
              <Select value={String(pageSize)} onValueChange={(v) => { setPageSize(Number(v)); setPageIndex(0) }}>
                <SelectTrigger id={id} className="w-fit whitespace-nowrap">
                  <SelectValue placeholder="Select number of results" />
                </SelectTrigger>
                <SelectContent>
                  {[5, 10].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {filtered.length === 0 ? '0' : pageIndex * pageSize + 1}-{Math.min((pageIndex + 1) * pageSize, filtered.length)} of {filtered.length}
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" onClick={() => setPageIndex((p) => Math.max(0, p - 1))} disabled={pageIndex <= 0} aria-label="Previous page">
                  <ChevronLeftIcon size={16} aria-hidden="true" />
                </Button>
                <Button size="icon" variant="outline" onClick={() => setPageIndex((p) => Math.min(pageCount - 1, p + 1))} disabled={pageIndex >= pageCount - 1} aria-label="Next page">
                  <ChevronRightIcon size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}