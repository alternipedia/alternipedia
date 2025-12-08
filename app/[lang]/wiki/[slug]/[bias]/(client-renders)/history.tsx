"use client"

import { useEffect, useId, useState, useMemo, useCallback, memo } from "react"
import { useParams, usePathname } from 'next/navigation'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLink,
  Star,
  TriangleAlert,
} from "lucide-react";
import { Badge } from "@/app/(components)/ui/badge";
import { Button } from "@/app/(components)/ui/button";
import { Label } from "@/app/(components)/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(components)/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/(components)/ui/tooltip";
import { useSession } from "next-auth/react";

type Item = {
  id: string
  revisionDate?: string
  stars?: number
  starred?: boolean
  url?: string
  violatesLaw?: boolean
}

import { ReportDialog } from '@/app/(components)/report-dialog';

export default function HistoryPage() {
  const id = useId();
  const path = usePathname();
  const params = useParams();
  const [pageIndex, setPageIndex] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(5)
  const [sortMode, setSortMode] = useState<'stars' | 'recent'>('recent');
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [starredMap, setStarredMap] = useState<Record<string, boolean>>({});
  const session = useSession();

  // Reporting state
  const [reportRevisionId, setReportRevisionId] = useState<string | null>(null);

  const handleToggleRemote = useCallback(async (revId: string, isStarred: boolean) => {
    // optimistic update
    setStarredMap((p) => ({ ...p, [revId]: !isStarred }))
    setData((prev) => prev.map((it) => it.id === revId ? { ...it, stars: isStarred ? Math.max(0, (it.stars ?? 0) - 1) : ((it.stars ?? 0) + 1) } : it))

    try {
      if (isStarred) {
        const resp = await fetch(`/api/stars?revision=${encodeURIComponent(revId)}`, { method: 'DELETE' })
        if (!resp.ok) throw new Error('Failed to remove star')
      } else {
        const resp = await fetch(`/api/stars`, { method: 'POST', body: JSON.stringify({ revisionId: Number(revId) }), headers: { 'Content-Type': 'application/json' } })
        if (!resp.ok) throw new Error('Failed to add star')
      }
    } catch (e) {
      // revert optimistic update on error
      setStarredMap((p) => ({ ...p, [revId]: isStarred }))
      setData((prev) => prev.map((it) => it.id === revId ? { ...it, stars: isStarred ? ((it.stars ?? 0) + 1) : Math.max(0, (it.stars ?? 0) - 1) } : it))
      console.error(e)
      // eslint-disable-next-line no-alert
      alert((e as any)?.message || 'Could not toggle star')
    }
  }, [])

  const StarCell = memo(function StarCell({ revId, stars, isStarred, onToggle }: { revId: string, stars: number, isStarred: boolean, onToggle: (revId: string, isStarred: boolean) => void }) {
    return (
      <div className="flex content-center items-center m-auto">
        <Badge
          onClick={(event) => session.status === "authenticated" ? onToggle(revId, isStarred) : event.stopPropagation()}
          className={`px-2 cursor-pointer hover:opacity-80 ${isStarred ? 'bg-yellow-50 text-yellow-800 border-transparent' : ''}`}
          variant={'default'}
        >
          <Star className={`-ms-0.5 ${isStarred ? 'text-yellow-400' : 'opacity-60'}`} size={12} aria-hidden="true" />
          {isStarred ? 'Starred' : 'Stars'}
          <span className={`text-[0.625rem] font-medium ${isStarred ? 'text-yellow-400' : 'text-primary-foreground/60'}`}>
            {String(stars)}
          </span>
        </Badge>
      </div>
    )
  })

  if (typeof window === 'undefined') {
    return null;
  }

  useEffect(() => {
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const slug = params?.slug
        const lang = params?.lang || 'en'
        const bias = path?.split('/')[4] || '';

        if (!slug || !bias) {
          setData([])
          setLoading(false)
          return
        }

        const q = new URLSearchParams({ slug: String(slug), lang: String(lang), bias: String(bias) })
        const resp = await fetch(`/api/revisions?${q.toString()}`)
        if (!resp.ok) throw new Error(`API error: ${resp.status}`);
        const body = await resp.json()
        const mapped: Item[] = (body.revisions || []).map((r: any) => {
          const slugVal = String(slug)
          const langVal = String(lang)
          const qp = new URLSearchParams({ revision: String(r.id) })
          const url = `/${encodeURIComponent(langVal)}/wiki/${encodeURIComponent(slugVal)}/${bias}?${qp.toString()}`
          return {
            id: String(r.id),
            revisionDate: r.createdAt,
            stars: r.stars ?? 0,
            starred: !!r.starred,
            violatesLaw: !!r.violatesLaw,
            url,
          }
        });
        setData(mapped)
        setStarredMap(mapped.reduce((acc, it) => { acc[it.id] = !!it.starred; return acc }, {} as Record<string, boolean>))
      } catch (err: any) {
        console.error(err)
        setError(err?.message || 'Failed to load revisions')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [params, path])

  // client-side sorting
  const sorted = useMemo(() => {
    if (!data) return [] as Item[]
    const copy = [...data]
    if (sortMode === 'stars') {
      copy.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0))
    } else {
      copy.sort((a, b) => {
        const da = a.revisionDate ? new Date(a.revisionDate).getTime() : 0
        const db = b.revisionDate ? new Date(b.revisionDate).getTime() : 0
        return db - da
      })
    }
    return copy
  }, [data, sortMode])

  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize))
  const paginated = useMemo(() => {
    const start = pageIndex * pageSize
    return sorted.slice(start, start + pageSize)
  }, [sorted, pageIndex, pageSize])

  useEffect(() => {
    if (pageIndex >= pageCount) setPageIndex(Math.max(0, pageCount - 1))
  }, [pageCount, pageIndex])

  function formatDate(value?: string) {
    if (!value) return '—'
    try {
      return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(value))
    } catch (e) {
      return String(value)
    }
  }

  return (
    <div className="space-y-4">
      <ReportDialog
        open={!!reportRevisionId}
        onOpenChange={(open) => !open && setReportRevisionId(null)}
        targetId={reportRevisionId || ''}
        targetType="revision"
        onSuccess={() => {
          // Optional: reload or show success
          setReportRevisionId(null);
        }}
      />
      {loading ? (
        <div className="text-center text-sm text-muted-foreground">Loading revisions…</div>
      ) : error ? (
        <div className="text-center text-sm text-red-500">{error}</div>
      ) : (
        <>
          <div className="flex items-start justify-between">
            <div />
            <div className="flex items-center gap-2">
              <Label htmlFor={`sort-${id}`} className="text-sm text-muted-foreground font-normal">Sort by:</Label>
              <Select value={sortMode} onValueChange={(v) => { setSortMode(v as any); setPageIndex(0) }}>
                <SelectTrigger id={`sort-${id}`} className="w-44 cursor-pointer">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent" className="cursor-pointer">Most recent</SelectItem>
                  <SelectItem value="stars" className="cursor-pointer">Most stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border bg-background">
            {paginated.length ? (
              <ul className="divide-y">
                {paginated.map((rev) => {
                  const isStarred = !!starredMap[rev.id]
                  return (
                    <li key={rev.id} className={`w-full ${rev.violatesLaw ? 'opacity-40 pointer-events-none' : ''}`}>
                      <div className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-neutral-800">
                        <div className="flex-2 min-w-0 ml-6 text-left">
                          <div className="text-sm font-medium text-foreground">{formatDate(rev.revisionDate)}</div>
                        </div>
                        <div className="flex flex-1 items-center justify-end mr-4 gap-2">
                          <StarCell revId={rev.id} stars={rev.stars ?? 0} isStarred={isStarred} onToggle={handleToggleRemote} />
                          <TooltipProvider delayDuration={0}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button onClick={() => setReportRevisionId(rev.id)} aria-label="Report revision" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-muted cursor-pointer">
                                  <TriangleAlert />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="px-2 py-1 text-xs" showArrow>Report</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          {rev.url ? (
                            <TooltipProvider delayDuration={0}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <a href={rev.url} aria-label="Open revision" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-muted">
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
                  )
                })}
              </ul>
            ) : (
              <div className="p-6 text-center text-sm text-muted-foreground">No results.</div>
            )}
          </div>

          {/* Pagination controls */}
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
                {sorted.length === 0 ? '0' : pageIndex * pageSize + 1}-{Math.min((pageIndex + 1) * pageSize, sorted.length)} of {sorted.length}
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
