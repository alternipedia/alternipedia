"use client"

import React, { useEffect, useState } from 'react'
import { Textarea } from '@/app/(components)/ui/textarea'
import { Button } from '@/app/(components)/ui/button'
import { Label } from '@/app/(components)/ui/label'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/app/(components)/ui/select'

const statusOptions = ['OPEN', 'IN_REVIEW', 'RESOLVED', 'DUPLICATE'] as const

export default function ThreadComments({ threadId, canModerate, threadStatus }: { threadId: number, canModerate: boolean, threadStatus: string | null  }) {
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [moderator, setCanModerate] = useState(canModerate);
  const [status, setThreadStatus] = useState<string | null>(threadStatus);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true;
    return () => { mounted = false }
  }, [threadId])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const trimmed = content.trim()
    if (!trimmed) { setError('Comment required'); return }
    if (trimmed.length > 2000) { setError('Comment too long'); return }
    setSubmitting(true)
    try {
      const body: any = { threadId, content: trimmed }
      if (moderator && selectedStatus) body.newStatus = selectedStatus
      const resp = await fetch('/api/thread-comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!resp.ok) {
        const body = await resp.json().catch(() => ({}))
        throw new Error(body?.error || `API ${resp.status}`)
      }
      const result = await resp.json()
      // If status updated, reflect locally
      if (result.updatedStatus) {
        setThreadStatus(result.updatedStatus)
      }
      // reload to pick up latest comments rendered server-side
      window.location.reload();
    } catch (err: any) {
      console.error(err)
      setError(err?.message || 'Failed to post comment')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        {moderator ? (
          <div>
            <Label htmlFor="thread-status">Change status</Label>
            <Select value={selectedStatus ?? ''} onValueChange={(v) => setSelectedStatus(v)}>
              <SelectTrigger id="thread-status" className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((s) => (
                  <SelectItem key={s} value={s}>{s.replaceAll('_', ' ')}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : null}
        <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write a comment..." maxLength={2000} />
        {error ? <div className="text-sm text-red-500">{error}</div> : null}
        <div className="flex justify-end">
          <Button type="submit" disabled={submitting} className='cursor-pointer'>{submitting ? 'Posting…' : 'Post comment'}</Button>
        </div>
      </form>
    </div>
  )
}
