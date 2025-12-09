"use client"

import { useEffect, useId } from "react"
import { Button } from "@/app/(components)/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/app/(components)/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/(components)/ui/dialog"
import {
  CircleUserRoundIcon,
  LogOutIcon,
  KeyRound,
  BookMarked,
  BookOpenText,
  Settings,
  MessageSquarePlus,
  Earth,
  ScanFace,
  CircleUserRound,
  Loader,
  ShieldUser,
  Gavel,
} from "lucide-react"
import {
  RiFacebookFill,
  RiGoogleFill,
  RiMicrosoftFill,
  RiTwitterXFill,
} from "@remixicon/react";
import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MaskedEmail } from "@/app/[lang]/(client-renders)/masked-email";
import { signIn, useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function UserMenu({ lang }: { lang: Locale }) {
  const id = useId();
  const dict = getDictionary(lang);
  const router = useRouter();

  const { data: session, status } = useSession();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild
        className="px-4 py-2 rounded-md transition-all">
        <Button size="icon"
          aria-label="Open account menu"
          variant="ghost"
          className="shadow-none cursor-pointer">
          <CircleUserRoundIcon size={16} aria-hidden="true" className="scale-120" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 dark:!bg-neutral-800" collisionPadding={8}>

        {status === "loading" && (
          <DropdownMenuLabel className="flex items-center gap-3 text-ellipsis">
            <Loader size={16} className="opacity-60" aria-hidden="true" />
            {dict.common.fetchingUserInfo}
          </DropdownMenuLabel>
        )}

        {status === "authenticated" && (
          <>
            <DropdownMenuLabel className="flex items-start gap-3">
              {session.user?.image && (
                <img
                  src={session.user?.image || '/default-avatar.png'}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="shrink-0 rounded-full mt-1"
                />
              )}
              {typeof session.user?.image !== 'string' && (
                <CircleUserRound className="mt-2" />
              )}
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground truncate text-sm font-medium">
                  {session.user?.name || 'User Name'}
                </span>
                <span className="text-muted-foreground truncate text-xs font-normal">
                  <MaskedEmail email={session.user?.email || 'user@example.com'} variant="advanced" />
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" onClick={() => router.push(`/${lang}/saved`)}>
                <BookMarked size={16} className="opacity-60" aria-hidden="true" />
                <span>{dict.userMenu.savedArticles}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" onClick={() => router.push(`/${lang}/contributions`)}>
                <MessageSquarePlus size={16} className="opacity-60" aria-hidden="true" />
                <span>{dict.userMenu.contributions}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" onClick={() => router.push(`/${lang}/settings`)}>
                <Settings size={16} className="opacity-60" aria-hidden="true" />
                <span>{dict.userMenu.preferences}</span>
              </DropdownMenuItem>
              {session.user.moderatedBias?.id && (
                <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" onClick={() => router.push(`/${lang}/admin`)}>
                  <Gavel size={16} className="opacity-60" aria-hidden="true" />
                  <span>Moderator panel</span>
                </DropdownMenuItem>
              )}
              {(session.user.role === "ADMIN" || session.user.role === "GLOBAL_ADMIN") && (
                <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" onClick={() => router.push(`/${lang}/admin`)}>
                  <ShieldUser size={16} className="opacity-60" aria-hidden="true" />
                  <span>Admin panel</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer dark:hover:bg-neutral-700" onClick={() => signOut()}>
              <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>{dict.userMenu.logout}</span>
            </DropdownMenuItem>
          </>
        )}
        {status !== "authenticated" && status !== 'loading' && (
          <DropdownMenuGroup>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="cursor-pointer dark:hover:bg-neutral-700">
                  <KeyRound size={16} className="opacity-60" aria-hidden="true" />
                  <span>{dict.userMenu.login}</span>
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent allowAutoFocus={false} className="dark:bg-neutral-900">
                <div className="flex flex-col items-center gap-2">
                  <ScanFace size={52} />
                  <DialogHeader>
                    <DialogTitle className="sm:text-center">
                      {dict.login.title} Alternipedia
                    </DialogTitle>
                  </DialogHeader>
                </div>
                <div className="flex flex-col gap-2">
                  <Button className="bg-[#DB4437] text-white after:flex-1 hover:bg-[#DB4437]/85 cursor-pointer" onClick={() => signIn("google")}>
                    <span className="pointer-events-none me-2 flex-1">
                      <RiGoogleFill className="opacity-60" size={16} aria-hidden="true" />
                    </span>
                    {dict.login.google}
                  </Button>
                  {/* <Button className="bg-[#14171a] text-white after:flex-1 hover:bg-[#14171a]/90 cursor-pointer" onClick={() => signIn("x")}>
                    <span className="pointer-events-none me-2 flex-1">
                      <RiTwitterXFill className="opacity-60" size={16} aria-hidden="true" />
                    </span>
                    {dict.login.x}
                  </Button> */}
                  <Button className="bg-[#1877f2] text-white after:flex-1 hover:bg-[#1877f2]/85 cursor-pointer" onClick={() => signIn("facebook")}>
                    <span className="pointer-events-none me-2 flex-1">
                      <RiFacebookFill className="opacity-60" size={16} aria-hidden="true" />
                    </span>
                    {dict.login.facebook}
                  </Button>
                  <Button className="bg-[#333333] text-white after:flex-1 hover:bg-[#333333]/85 cursor-pointer" onClick={() => signIn("azure-ad")}>
                    <span className="pointer-events-none me-2 flex-1">
                      <RiMicrosoftFill className="opacity-60" size={16} aria-hidden="true" />
                    </span>
                    {dict.login.microsoft}
                  </Button>
                </div>

                <p className="text-muted-foreground text-center text-xs">
                  {dict.login.policy}
                </p>
              </DialogContent>
            </Dialog>
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
