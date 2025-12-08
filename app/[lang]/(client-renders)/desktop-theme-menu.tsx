"use client";

import { Button } from "@/app/(components)/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/(components)/ui/dialog";
import { Palette } from "lucide-react";
import ThemeMenu from "./theme-menu";
import { useState } from "react";

export default function DesktopThemeMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon"
          aria-label="Open theme menu"
          variant="ghost"
          className="shadow-none cursor-pointer">
          <Palette size={16} aria-hidden="true" className="scale-120" />
        </Button>
      </DialogTrigger>

      <DialogContent className="dark:bg-neutral-900">
        <DialogHeader>
          <DialogTitle>Appearance</DialogTitle>
          <DialogDescription className="mt-2">Choose a theme</DialogDescription>
        </DialogHeader>
        <div className="mt-3">
          <ThemeMenu />
        </div>
      </DialogContent>
    </Dialog>
  );
}