"use client"

import { useEffect, useId, useRef, useState } from "react"
import {
  RiCodeFill,
  RiFacebookFill,
  RiMailLine,
  RiTwitterXFill,
} from "@remixicon/react"
import { CheckIcon, CopyIcon, Link } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/app/(components)/ui/button"
import { Input } from "@/app/(components)/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/(components)/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/(components)/ui/tooltip"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Locale } from "@/lib/i18n/config"
import { useParams } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/app/(components)/ui/dialog"

export default function ShortURL({ mobile }: { mobile: boolean }) {
  const params = useParams();
  const currentLang = params?.lang as Locale || 'en';
  const dict = getDictionary(currentLang);
  const id = useId()
  const [copied, setCopied] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [link, setLink] = useState<string>('https://alternipedia.org/');
  const [embedOpen, setEmbedOpen] = useState<boolean>(false)
  const embedRef = useRef<HTMLTextAreaElement | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  // Module-level cache for shortener results/promises to avoid duplicate POSTs
  // Keyed by `${lang}::${normalizedSlug}`
  const shortenerCacheRef = useRef<Map<string, string | Promise<string>> | null>(null)
  if (!shortenerCacheRef.current) shortenerCacheRef.current = new Map()
  const shortenerCache = shortenerCacheRef.current!
  const debounceTimer = useRef<number | null>(null)

  useEffect(() => {
    // Clear any previous debounce
    if (debounceTimer.current) {
      window.clearTimeout(debounceTimer.current)
      debounceTimer.current = null
    }

    if (!params?.slug) {
      setLink(`https://alternipedia.org/`)
      return
    }

    // Debounce so quick slug toggles (canonicalization, encoding) don't spam the shortener
    debounceTimer.current = window.setTimeout(async () => {
      const rawSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug
      const normalizedSlug = decodeURIComponent(String(rawSlug)).replace(/_/g, ' ')
      const encodedPath = encodeURIComponent(normalizedSlug)
      const key = `${currentLang}::${normalizedSlug}`

      const fallback = `https://alternipedia.org/${currentLang}/wiki/${encodedPath}`

      // If we already have a cached string, use it
      const cached = shortenerCache.get(key)
      if (typeof cached === 'string') {
        setLink(cached)
        return
      }

      // If there's an in-flight promise, await and use it
      if (cached && typeof (cached as any).then === 'function') {
        try {
          const url = await (cached as Promise<string>)
          setLink(url)
          return
        } catch (e) {
          setLink(fallback)
          return
        }
      }

      // Otherwise create a promise, store it immediately to dedupe concurrent requests
      const p = (async () => {
        try {
          const res = await fetch('/api/shorten', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: fallback }),
          })
          if (!res.ok) throw new Error('Shortener service failed')
          const json = await res.json()
          return json.shortUrl as string
        } catch (err) {
          console.warn('shorten failed', err)
          return fallback
        }
      })()

      shortenerCache.set(key, p)

      try {
        const shortUrl = await p
        shortenerCache.set(key, shortUrl)
        setLink(shortUrl)
      } catch (e) {
        shortenerCache.set(key, fallback)
        setLink(fallback)
      }
    }, 250)

    return () => {
      if (debounceTimer.current) {
        window.clearTimeout(debounceTimer.current)
        debounceTimer.current = null
      }
    }
  }, [params?.slug, currentLang, shortenerCache])

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  const showToast = (message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 1500)
  }

  const getEmbedCode = (url: string) => {
    return `<iframe src="${url}" title="Alternipedia article" width="560" height="315" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  }

  const handleEmbed = () => {
    setEmbedOpen(true)
    // delay focus until dialog mounts
    setTimeout(() => embedRef.current?.select(), 50)
  }

  const handleCopyEmbed = async () => {
    const code = getEmbedCode(link)
    try {
      await navigator.clipboard.writeText(code)
      showToast('Embed code copied')
      setEmbedOpen(false)
    } catch (e) {
      showToast('Copy failed')
    }
  }

  const openPopup = (url: string, title = 'Share') => {
    const width = 600
    const height = 500
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2
    window.open(url, title, `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars=yes`)
  }

  const handleTwitter = () => {
    const text = encodeURIComponent("Check out this Alternipedia article")
    const url = encodeURIComponent(link)
    const twitter = `https://twitter.com/intent/tweet?text=${text}&url=${url}`
    openPopup(twitter, 'Share on Twitter')
  }

  const handleFacebook = () => {
    const url = encodeURIComponent(link)
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${url}`
    openPopup(fb, 'Share on Facebook')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent('Interesting article on Alternipedia')
    const body = encodeURIComponent(`${link}\n\nFound on Alternipedia.`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <Popover>
        <>
          {mobile && (
            <PopoverTrigger asChild>
              <div className="flex-row inline-flex items-center w-full">
                <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                  <div data-svg-wrapper data-property-1="Notes" className="relative">
                    <Link className="text-gray-500" size={16} />
                  </div>
                  <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                    <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.shortUrl}</div>
                  </div>
                </button>
              </div>
            </PopoverTrigger>
          )}
          {!mobile && (
            <PopoverTrigger asChild>
              <a className="hover:underline cursor-pointer">
                <div className="size- flex justify-start items-center gap-1.5">
                  <div data-svg-wrapper data-property-1="Short link" className="relative">
                    <Link className="text-gray-500 dark:text-neutral-400 " size={16} />
                  </div>
                  <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden">
                    <div className="justify-start text-gray-500 dark:text-neutral-400  text-sm font-normal leading-normal truncate">{dict.tools.shortUrl}</div>
                  </div>
                </div>
              </a>
            </PopoverTrigger>
          )}
        </>
        <PopoverContent className="w-72" side="top" showArrow={true}>
          <div className="flex flex-col gap-3 text-center">
            <div className="text-sm font-medium">Share article</div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button size="icon" variant="outline" aria-label="Embed" className="cursor-pointer" onClick={handleEmbed}>
                <RiCodeFill size={16} aria-hidden="true" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                aria-label="Share on Twitter"
                className="cursor-pointer"
                onClick={handleTwitter}
              >
                <RiTwitterXFill size={16} aria-hidden="true" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                aria-label="Share on Facebook"
                className="cursor-pointer"
                onClick={handleFacebook}
              >
                <RiFacebookFill size={16} aria-hidden="true" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                aria-label="Share via email"
                className="cursor-pointer"
                onClick={handleEmail}
              >
                <RiMailLine size={16} aria-hidden="true" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Input
                  ref={inputRef}
                  id={id}
                  className="pe-9"
                  type="text"
                  defaultValue={`${link}`}
                  aria-label="Share link"
                  readOnly
                />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleCopy}
                        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                        aria-label={copied ? "Copied" : "Copy to clipboard"}
                        disabled={copied}
                      >
                        <div
                          className={cn(
                            "transition-all",
                            copied
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          )}
                        >
                          <CheckIcon
                            className="stroke-emerald-500"
                            size={16}
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className={cn(
                            "absolute transition-all",
                            copied
                              ? "scale-0 opacity-0"
                              : "scale-100 opacity-100"
                          )}
                        >
                          <CopyIcon size={16} aria-hidden="true" />
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 text-xs">
                      Copy to clipboard
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {/* Embed dialog */}
      <Dialog open={embedOpen} onOpenChange={(v) => setEmbedOpen(v)}>
        <DialogContent className="max-w-xl"  allowAutoFocus={false}>
          <DialogHeader>
            <DialogTitle>Embed article</DialogTitle>
            <DialogDescription className="mt-2">Copy the iframe embed code to include this article on your site.</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <textarea
              ref={embedRef}
              className="w-full rounded-md border p-2 text-sm font-mono"
              readOnly
              rows={4}
              value={getEmbedCode(link)}
              aria-label="Embed code"
            />
          </div>
          <DialogFooter className="mt-4">
            <div className="flex gap-2 w-full justify-end">
              <Button variant="ghost" onClick={() => setEmbedOpen(false)}>Cancel</Button>
              <Button onClick={handleCopyEmbed}>Copy embed code</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Simple toast */}
      {toast && (
        <div className="fixed left-1/2 bottom-8 -translate-x-1/2 rounded-md bg-black/90 text-white px-4 py-2 text-sm z-50">{toast}</div>
      )}
    </div>
  )
}
