"use client";

import { Link } from "react-aria-components";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Locale } from "@/lib/i18n/config";

export default function GoPro({ params: { lang } }: { params: { lang: string } }) {
  const dict = getDictionary(lang as Locale);

  return (
    <Link href={`/stripe/donate`} className="py-1.5 px-3 rounded-md bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold shadow-sm hidden md:block">Donate</Link>
    // <Link href={`/${lang}/upgrade`} className="py-1.5 px-3 rounded-md bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold shadow-sm hidden md:block">{dict.upgrade.goPro}</Link>
  );
}
