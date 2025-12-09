"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/(components)/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/(components)/ui/card"
import { Badge } from "@/app/(components)/ui/badge"
import { ScrollArea } from "@/app/(components)/ui/scroll-area"
import { format } from "date-fns"
import { FileEdit, MessageSquare, MessageCircle, ExternalLink, GitCommitVertical } from "lucide-react"

type ContributionProps = {
  lang: string
  edits: any[]
  threads: any[]
  comments: any[]
}

export function ContributionsClient({ lang, edits, threads, comments }: ContributionProps) {
  const [activeTab, setActiveTab] = useState("edits")

  function formatDate(date: string | Date) {
    try {
      return format(new Date(date), "MMM d, yyyy • h:mm a")
    } catch (e) {
      return ""
    }
  }

  return (
    <div className="container max-w-4xl mx-auto py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Contributions</h1>
        <p className="text-muted-foreground">
          View your history of page edits, discussions, and comments.
        </p>
      </div>

      <Tabs defaultValue="edits" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="edits">Page Edits</TabsTrigger>
          <TabsTrigger value="threads">Threads</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        <TabsContent value="edits" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileEdit className="h-5 w-5" />
                Page Edits
              </CardTitle>
              <CardDescription>
                Revisions you have contributed to.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {edits.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  No page edits found.
                </div>
              ) : (
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {edits.map((edit) => (
                      <div key={edit.id} className="flex flex-col space-y-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <Link
                              href={`/${lang}/wiki/${edit.article.slug}/${edit.bias.name}`}
                              className="font-semibold hover:underline flex items-center gap-2"
                            >
                              {edit.article.title}
                              <Badge variant="outline" className="text-xs font-normal">
                                {edit.bias.name}
                              </Badge>
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              Revision #{edit.id}
                            </p>
                          </div>
                          <Link
                            href={`/${lang}/wiki/${edit.article.slug}/${edit.bias.name}?revision=${edit.id}`}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{formatDate(edit.createdAt)}</span>
                          {edit.votes && edit.votes.length > 0 && (
                            <span>{edit.votes.length} stars</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="threads" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Threads
              </CardTitle>
              <CardDescription>
                Discussions you have started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {threads.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  No threads found.
                </div>
              ) : (
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {threads.map((thread) => (
                      <div key={thread.id} className="flex flex-col space-y-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <Link
                              href={`/${lang}/wiki/${thread.article.slug}/${thread.bias.name}?threadId=${thread.id}`}
                              className="font-semibold hover:underline"
                            >
                              {thread.title}
                            </Link>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                in {thread.article.title}
                              </span>
                              <Badge variant="secondary" className="text-xs">
                                {thread.status}
                              </Badge>
                            </div>
                          </div>
                          <Link
                            href={`/${lang}/wiki/${thread.article.slug}/${thread.bias.name}?threadId=${thread.id}`}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{formatDate(thread.createdAt)}</span>
                          <span>{thread._count?.comments || 0} comments</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Comments
              </CardTitle>
              <CardDescription>
                Replies you have made in discussions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {comments.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  No comments found.
                </div>
              ) : (
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex flex-col space-y-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <Link
                              href={`/${lang}/wiki/${comment.thread.article.slug}/${comment.thread.bias.name}?threadId=${comment.thread.id}`}
                              className="font-medium hover:underline text-sm line-clamp-2"
                            >
                              "{comment.content}"
                            </Link>
                            <p className="text-xs text-muted-foreground">
                              on thread: <span className="font-semibold">{comment.thread.title}</span>
                            </p>
                          </div>
                          <Link
                            href={`/${lang}/wiki/${comment.thread.article.slug}/${comment.thread.bias.name}?threadId=${comment.thread.id}`}
                            className="text-muted-foreground hover:text-foreground shrink-0 ml-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{formatDate(comment.createdAt)}</span>
                          <span>{comment._count?.likes || 0} likes</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
