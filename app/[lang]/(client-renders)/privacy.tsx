"use client"

import { useRef, useState } from "react"

import { Button } from "@/app/(components)/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/(components)/ui/dialog"

import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

export default function Terms({ text, lang }: { text?: string; lang: Locale }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const dict = getDictionary(lang);

  const { title, lastUpdated, intro, sections } = dict.privacyPolicy;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="hover:underline text-blue-400 cursor-pointer">{text}</a>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5 dark:bg-neutral-900">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            {title}
          </DialogTitle>
          <div
            ref={contentRef}
            className="overflow-y-auto"
          >
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                  <div className="space-y-4">

                    {sections.map((section, i) => (
                      <PrivacySection key={i} section={section} />
                    ))}

                  </div>
                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t px-6 py-4 sm:items-center">
          <p className="float-left text-sm text-muted-foreground">
            {dict.privacyPolicy.lastUpdatedText} {dict.privacyPolicy.lastUpdated}
          </p>
          <DialogClose asChild>
            <Button type="button" variant="outline" className="cursor-pointer">
              {dict.close}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function PrivacySection({ section }: { section: any }) {
  return (
    <div className="space-y-1">
      <p>
        <strong>{section.title}</strong>
      </p>
      {section.content.map((block: any, i: number) => {
        if (block.type === "paragraph") {
          return (
            <p key={i}>
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc pl-6">
              {block.items.map((item: any, j: number) => (
                <li key={j}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
}