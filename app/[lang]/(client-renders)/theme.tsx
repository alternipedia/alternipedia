"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/(components)/ui/tooltip';
import {
  getCookie,
  setCookie,
} from 'cookies-next/client';
import { cn } from '@/lib/utils';
import { SunMoon } from "lucide-react";

export default function ThemeToggle({ className }: { className?: string }) {

  const setTheme = () => {
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
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger onClick={() => setTheme()} className={`px-2.5 py-2.5 rounded-md transition-all cursor-pointer shadow-none hover:bg-accent`} type="button" id="radix-_R_6qnpfiv5ubsnpnb_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
          <SunMoon size={16} className="scale-120" />
          <span className="sr-only">Theme</span>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-xl:hidden">
          <p>Change theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  );
}