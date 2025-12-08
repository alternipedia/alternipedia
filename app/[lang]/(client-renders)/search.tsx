"use client";

import { useEffect, useId, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { LoaderCircleIcon, MicIcon, SearchIcon } from "lucide-react"

import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

import { Input } from "@/app/(components)/ui/input"
import { useMenuNavigation } from '@/app/(components)/hooks/use-menu-navigation'

type Suggestion = { title: string; slug: string }


export default function Search() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Suggestion[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)
  const params = useParams();
  const lang = params?.lang as string;
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  // Get dictionary for the current language (fallback to 'en' if invalid)
  const dict = getDictionary(isValidLocale(lang) ? lang : 'en');

  // Debounced search
  useEffect(() => {
    if (!inputValue) {
      setResults([])
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    const timer = setTimeout(async () => {
      try {
        const q = encodeURIComponent(inputValue)
        // Use MediaWiki opensearch API directly from the client (CORS-friendly with origin=*)
        const apiUrl = `https://${encodeURIComponent(lang || 'en')}.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${q}&limit=10`
        const res = await fetch(apiUrl)
        if (res.ok) {
          const json = await res.json()
          const titles: string[] = Array.isArray(json) && Array.isArray(json[1]) ? json[1] : []
          setResults(titles.map((t) => ({ title: t, slug: encodeURIComponent(t) })))
        } else {
          setResults([])
        }
      } catch (e) {
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [inputValue, lang])

  const { selectedIndex, setSelectedIndex } = useMenuNavigation<Suggestion>({
    containerRef,
    query: inputValue,
    items: results,
    onSelect: (item) => {
      // Navigate to article page. We'll assume default bias 'wikipedia' route or lang route.
      // Use slug as encoded title
      router.push(`/${lang}/wiki/${item.slug}/wikipedia`)
    },
    onClose: () => {
      setResults([])
    },
  })

  return (
    <div className="*:not-first:mt-2 w-full px-2.5 py-1.5 mx-1 md:mx-4">
      <div className="relative" ref={containerRef}>
        <Input
          ref={inputRef}
          id={id}
          className="peer ps-9 pe-9 bg-gray-100 text-gray-400 dark:bg-neutral-800 dark:text-gray-300 focus:bg-white focus:dark:bg-neutral-700 w-full"
          placeholder={dict.common.searchPlaceholder}
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-expanded={results.length > 0}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          {isLoading ? (
            <LoaderCircleIcon
              className="animate-spin"
              size={16}
              role="status"
              aria-label="Loading..."
            />
          ) : (
            <SearchIcon size={16} aria-hidden="true" />
          )}
        </div>
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Press to speak"
          type="button"
        >
          <MicIcon size={16} aria-hidden="true" />
        </button>

        {results.length > 0 && (
          <ul
            id="search-suggestions"
            role="listbox"
            aria-label="Search suggestions"
            className="absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-md border bg-background dark:bg-neutral-800 text-sm shadow-lg"
          >
            {results.map((r, idx) => (
              <li
                key={r.slug}
                role="option"
                onMouseDown={(e) => {
                  e.preventDefault()
                  router.push(`/${lang}/wiki/${r.slug}/wikipedia`);
                  setInputValue('');
                  setResults([]);
                  inputRef.current?.blur()
                  window.dispatchEvent(new CustomEvent('unload-signal'));
                }}
                className={`px-3 hover:bg-gray-100 hover:dark:bg-neutral-700 first:pb-2 last:pt-2 py-2 cursor-pointer text-foreground`}
              >
                {r.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
