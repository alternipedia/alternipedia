"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/app/(components)/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/(components)/ui/dialog";
import { Button } from "@/app/(components)/ui/button";
import { Palette, RectangleEllipsis, Sprout } from "lucide-react";
import ThemeToggle from "./theme";
import { getCookie, setCookie } from "cookies-next/client";

export default function MobileOverflow({ lang }: { lang: string }) {

  return (
    <div className="flex justify-end m-auto">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button size="icon" aria-label="More" variant="ghost" className="shadow-none cursor-pointer">
            <RectangleEllipsis size={14} className="opacity-50 text-neutral-600 dark:text-neutral-400" aria-hidden />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent collisionPadding={8}>
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={(e: any) => {
              // prevent Radix from closing the menu before we open the Dialog
              // stop propagation and open the dialog after a short delay to avoid race conditions
              e.preventDefault();
              if (e.stopPropagation) e.stopPropagation();
              const theme = getCookie("alternipedia-theme");
              if (theme === "dark") {
                setCookie("alternipedia-theme", "light", { path: '/' });
                document.documentElement.classList.remove("dark");
                document.head.querySelector('meta[name="theme-color"]')?.setAttribute("content", "white");
              } else {
                setCookie("alternipedia-theme", "dark", { path: '/' });
                document.documentElement.classList.add("dark");
                document.head.querySelector('meta[name="theme-color"]')?.setAttribute("content", "black");
              }
            }}
          >
            <span className="flex items-center gap-2">
              <Palette size={16} className="opacity-60" aria-hidden />
              <span>Toggle theme</span>
            </span>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link className="cursor-pointer flex items-center gap-2" href={`/upgrade`}>
              <Sprout size={16} className="opacity-60" aria-hidden />
              <span>Go Pro</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
