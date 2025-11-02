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
import ThemeMenu from "@/app/[lang]/(client-renders)/theme-menu";
import { Button } from "@/app/(components)/ui/button";
import { Palette, RectangleEllipsis, Sprout } from "lucide-react";

export default function MobileOverflow({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);

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
              setTimeout(() => setOpen(true), 250);
            }}
          >
            <span className="flex items-center gap-2">
              <Palette size={16} className="opacity-60" aria-hidden />
              <span>Appearance</span>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="dark:bg-neutral-800">
          <DialogHeader>
            <DialogTitle>Appearance</DialogTitle>
            <DialogDescription className="mt-2">Choose a theme</DialogDescription>
          </DialogHeader>
          <div className="mt-3">
            <ThemeMenu />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
