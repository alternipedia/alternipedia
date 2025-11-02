import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import React from "react";
import Link from "next/link";
import { toast } from "sonner";
import '@/app/globals.css';
import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Search from '@/app/[lang]/(client-renders)/search';
import UserMenu from '@/app/[lang]/(client-renders)/user-menu';
import MobileOverflow from '@/app/[lang]/(client-renders)/mobile-overflow';
import { Button } from "@/app/(components)/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/(components)/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/(components)/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/(components)/ui/tooltip";
import { Earth, MenuIcon, Palette, RectangleEllipsis, Sprout, SquareAsterisk, SquareChevronDown } from "lucide-react";
import Terms from "@/app/[lang]/(client-renders)/terms";
import Privacy from "@/app/[lang]/(client-renders)/privacy";
import GoPro from "@/app/[lang]/(client-renders)/go-pro";
import { authOptions } from "@/lib/auth";
import { Textarea } from "@/app/(components)/ui/textarea";
import ClientAnalytics from "../(client-renders)/analytics";
import CookieStatement from "./(client-renders)/cookie-statement";
import Form from "next/form";
import { prisma } from "@/lib/prisma";
import { Language } from "@prisma/client";
import ThemeMenu from "./(client-renders)/theme-menu";
import DesktopThemeMenu from "./(client-renders)/desktop-theme-menu";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return {
    title: "Alternipedia",
    description: dict.metadata.description,
    keywords: [
      "alternipedia",
      "alternative wikipedia",
      "multiple perspectives",
      "bias",
      "politics",
      "encyclopedia",
      "grokipedia",
      "wikipedia alternative"
    ],
  };
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const session = await getServerSession(authOptions)

  // Validate if the language is supported
  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang as Locale);

  const onSubmitFeedback = async (data: FormData) => {
    "use server";

    const content = data.get("feedback");

    if (content && session?.user) {
      try {
        await prisma.feedback.create({
          data: {
            language: lang.toUpperCase() as Language,
            user: {
              connect: { email: session?.user.email! }
            },
            content: String(content),
          },
        });
        toast.success("Thank you for your feedback!");
      } catch (err) {
        console.error("Error submitting feedback:", err);
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ClientAnalytics />
      {/* <nav> */}
      {/* Mobile top row: Menu | Title | User (only on small screens) */}
      <div className="md:hidden bg-white dark:bg-neutral-900">
        <div className="flex items-center justify-between px-4 py-3.5">
          {/* Left: main nav (menu) */}
          <div>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild className="px-4 py-2 rounded-md transition-all">
                <Button size="icon"
                  aria-label="Open navigation"
                  variant="ghost"
                  className="shadow-none cursor-pointer">
                  <MenuIcon size={16} aria-hidden="true" className="scale-120" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent collisionPadding={8} className="dark:!bg-neutral-800">
                <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}`}>{dict.navigation.aboutUs}</Link></DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}/news`}>{dict.navigation.currentEvents}</Link></DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}/random`}>{dict.navigation.randomArticle}</Link></DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}/help`}>{dict.navigation.help}</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center: title */}
          <div className="text-xl font-medium text-black dark:text-white font-serif truncate cursor-default">Alternipedia</div>

          {/* Right: user menu */}
          <div className="flex-shrink-0">
            <UserMenu lang={lang as Locale} />
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3 flex bg-white dark:bg-neutral-900">
        <Search />
        <MobileOverflow lang={lang} />
      </div>

      <div id="nav" className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 py-3.5 bg-white dark:bg-neutral-900 justify-between items-center hidden md:flex">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-3 sm:gap-5 min-w-0 shrink-0">
            {/* Desktop/Tablet menu: hidden on small screens because we render a mobile header above */}
            <div className="hidden md:block">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className="px-4 py-2 rounded-md transition-all">
                  <Button size="icon"
                    aria-label="Open navigation"
                    variant="ghost"
                    className="shadow-none cursor-pointer">
                    <MenuIcon size={16} aria-hidden="true" className="scale-120" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent collisionPadding={8} className="dark:!bg-neutral-800">
                  <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}`}>{dict.navigation.aboutUs}</Link></DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}/news`}>{dict.navigation.currentEvents}</Link></DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}/random`}>{dict.navigation.randomArticle}</Link></DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" asChild><Link href={`/${lang}/help`}>{dict.navigation.help}</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="px-2.5 py-1.5 rounded-md items-center flex-shrink-0 cursor-default hidden md:block">
              <div className="text-xl font-medium text-black dark:text-white font-serif">Alternipedia</div>
            </div>
          </div>
          {/* Desktop/Tablet search — hide on small screens since we render a mobile search below */}
          <Search />
          <div className="flex justify-end items-center gap-2.5 shrink-0">
            <GoPro params={{ lang }} />
            <div className="p-1.5 rounded-md flex justify-start items-center gap-1.5">
              <div className="flex justify-center items-center gap-1.5">
                <UserMenu lang={lang as Locale} />
              </div>
            </div>
            <div className="p-1.5 rounded-md justify-start items-center gap-1.5 hidden md:block">
              <div className="flex justify-center items-center gap-1.5">
                <DesktopThemeMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </nav> */}

      <main className="flex-1 dark:bg-neutral-900 bg-white">
        {children}
      </main>

      {/* <footer> */}
      <div id="footer" className="w-full pt-4 border-t border-gray-300 dark:border-neutral-900 bg-white dark:bg-neutral-800 z-40">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
          {/* Footer Content Container - 70/30 split on large screens */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="w-full md:w-[5%] hidden md:block content-center -mt-2">
              <Link href={`/${lang}/stripe/donate`}><Earth size={52} className="transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer" /></Link>
            </div>
            {/* Legal Text - 70% width on medium+ screens */}
            <div className="w-full md:w-[65%]">
              <p className="text-neutral-800 dark:text-neutral-300 text-sm font-normal leading-normal">
                <span>{dict.footer.text.part1}</span>
                <span className="text-blue-400"><Link href={`/${lang}/license`} className="hover:underline">{dict.footer.text.part2}</Link></span>
                <span>{dict.footer.text.part3}</span>
                <Terms text={dict.footer.text.part4} lang={lang as Locale} />
                <span>{dict.footer.text.part5}</span>
                <Privacy text={dict.footer.text.part6} lang={lang as Locale} />
                <span>{dict.footer.text.part7}</span>
              </p>
            </div>

            {/* Links Columns Container - 30% width on medium+ screens, centered on mobile */}
            <div className="w-full md:w-[30%] flex flex-row gap-8 justify-center md:justify-start">
              {/* First Links Column */}
              <div className="flex flex-col gap-1">
                {!session?.user && (
                  <TooltipProvider delayDuration={0}>
                    <Tooltip persistOnClick={true}>
                      <TooltipTrigger className="text-blue-400 text-sm font-normal leading-normal cursor-not-allowed w-fit">
                        {dict.footer.contact}
                      </TooltipTrigger>
                      <TooltipContent className="px-2 py-1 text-xs" side="top" withBackdrop={true} collisionPadding={8} showArrow={true}>
                        {dict.footer.pleaseLogin}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {session?.user && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="text-blue-400 text-sm font-normal leading-normal cursor-pointer hover:underline w-fit active:underline">
                        {dict.footer.contact}
                      </div>
                    </DialogTrigger>
                    <DialogContent allowAutoFocus={false} className="dark:bg-neutral-900">
                      <DialogHeader>
                        <DialogTitle>Send us feedback</DialogTitle>
                        <DialogDescription className="mt-2">
                          We will use your email to get back to you if necessary.
                        </DialogDescription>
                      </DialogHeader>
                      <Form action={onSubmitFeedback} className="space-y-5">
                        <Textarea
                          className="dark:bg-neutral-800"
                          id="feedback"
                          name="feedback"
                          placeholder="How can we improve alternipedia?"
                          aria-label="Send feedback"
                          maxLength={2000}
                          minLength={10}
                        />
                        <DialogClose asChild>
                          <div className="flex flex-col sm:flex-row sm:justify-end">
                            <Button className="cursor-pointer" type="submit">Send feedback</Button>
                          </div>
                        </DialogClose>
                      </Form>
                    </DialogContent>
                  </Dialog>
                )}
                <Link href="/" className="text-blue-400 text-sm font-normal leading-normal hover:underline inline-block w-fit active:underline">{dict.footer.disclaimers}</Link>
                <Link href="/" className="text-blue-400 text-sm font-normal leading-normal hover:underline inline-block w-fit active:underline">{dict.footer.codeOfConduct}</Link>
              </div>

              {/* Second Links Column */}
              <div className="flex flex-col gap-1">
                <a href="https://github.com/svnty/Alternipedia" target="_blank" className="text-blue-400 text-sm font-normal leading-normal hover:underline inline-block w-fit active:underline cursor-pointer">{dict.footer.developers}</a>
                <Link href="/" className="text-blue-400 text-sm font-normal leading-normal hover:underline inline-block w-fit active:underline">{dict.footer.statistics}</Link>
                <CookieStatement lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </footer> */}
    </div>
  );
}
