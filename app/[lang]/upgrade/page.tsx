import React from "react";
import { Button } from "@/app/(components)/ui/button";
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { notFound } from 'next/navigation';
import Link from "next/link";

export default async function Pricing({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <div className="bg-defaultbgmain w-full py-12 px-[5%] md:px-[15%]">
      {/* Header Section */}
      <div className="mx-auto text-center mb-8">
        <h1 className="font-h1 cursor-default font-[number:var(--h1-font-weight)] text-2xl sm:text-3xl lg:text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)] mb-6">
          📚 {dict.upgrade.title} ⚡
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-8">
        {/* Free Plan Card */}
        <div className="flex flex-col bg-defaultbgmain rounded-[10px] border-2 border-solid border-accent overflow-hidden">
          <div className="bg-accent py-2 px-4">
            <h3 className="text-center font-h3 text-defaulttextmain text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] font-semibold">
              {dict.upgrade.freePlan.name}
            </h3>
          </div>

          <div className="flex-1 p-6 space-y-4">
            <p className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
              {dict.upgrade.freePlan.features.readAll}
            </p>
            <p className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
              {dict.upgrade.freePlan.features.basicTheme}
            </p>
            <p className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
              {dict.upgrade.freePlan.features.saveArticles}
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-end justify-center gap-2 mb-6">
              <span className="[font-family:'Open_Sans-Bold',Helvetica] font-bold text-defaulttextmain text-3xl tracking-[0] leading-[52.5px]">
                {'$0'}
              </span>
              <span className="font-sub font-[number:var(--sub-font-weight)] text-defaulttextmain text-[length:var(--sub-font-size)] tracking-[var(--sub-letter-spacing)] leading-[var(--sub-line-height)] [font-style:var(--sub-font-style)] mb-2">
                / {dict.upgrade.month}
              </span>
            </div>
            <button className="w-full bg-accent flex h-[57px] items-center justify-center gap-1.5 p-1.5 rounded-md">
              <span className="[font-family:'Open_Sans-Regular',Helvetica] font-normal text-defaulttextmain text-base tracking-[0] leading-7">
                {dict.upgrade.freePlan.buttonText}
              </span>
            </button>
          </div>
        </div>

        {/* Pro Plan Card */}
        <div
          className="flex flex-col rounded-[10px] border-2 border-transparent relative overflow-hidden"
          style={{
            background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(180deg, rgba(238,205,27,1) 0%, rgba(32,33,34,1) 100%) border-box"
          }}
        >
          <div className="bg-[#eecd1b] py-2 px-4 relative z-10">
            <h3 className="text-center font-h3 text-defaulttextmain text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] font-semibold dark:text-black">
              Alternipedia {dict.upgrade.pro}
            </h3>
          </div>

          <div className="flex-1 p-6 space-y-3 relative z-10">
            <h4 className="font-h3 font-[number:var(--h3-font-weight)] text-defaulttextmain text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-4">
              {dict.upgrade.proPlan.subtitle}
            </h4>
            <ul className="list-disc list-inside gap-2 flex flex-col">
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.customThemes}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.notes}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.advancedSearch}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.semanticSearch}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)]text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.aiAssistant}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.topicMaps}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.profileCustomization}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.aiTranslation}
              </li>
              <li className="font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                {dict.upgrade.proPlan.features.appSupport}
              </li>
            </ul>
          </div>

          <div className="p-6 relative z-10">
            <div className="flex items-end justify-center gap-2 mb-6">
              <span className="[font-family:'Open_Sans-Bold',Helvetica] font-bold text-defaulttextmain text-3xl tracking-[0] leading-[52.5px]">
                {"$9.99"}
              </span>
              <span className="font-sub font-[number:var(--sub-font-weight)] text-defaulttextmain text-[length:var(--sub-font-size)] tracking-[var(--sub-letter-spacing)] leading-[var(--sub-line-height)] [font-style:var(--sub-font-style)] mb-2">
                / {dict.upgrade.month}
              </span>
            </div>
            <Link href={`/${lang}/stripe/pro`}>
              <Button className="w-full flex h-[57px] items-center justify-center gap-1.5 p-1.5 rounded-m cursor-pointer hover:bg-[#eecd1b] transition-colors duration-[2000ms] ease-in-out">
                <span className="[font-family:'Open_Sans-Bold',Helvetica] font-bold text-defaultbgmain text-base tracking-[0] leading-7">
                  {dict.upgrade.proPlan.buttonText}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
