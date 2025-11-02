"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useMemo, useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/app/(components)/ui/dialog";
import { Input } from "@/app/(components)/ui/input";
import { RadioGroup, RadioGroupItem } from "@/app/(components)/ui/radio-group";
import { Label } from "@/app/(components)/ui/label";
import { ScrollArea } from "@/app/(components)/ui/scroll-area";
import { Button } from "@/app/(components)/ui/button";
import { Check, Languages, Search } from "lucide-react";
import { SlidingLanguage } from "@/app/[lang]/(client-renders)/sliding-language";
import { locales, localeNames, type Locale } from '@/lib/i18n/config';
import { getDictionary } from "@/lib/i18n/dictionaries";

interface ToolsProps {
  currentLang: Locale;
  mobile: boolean;
}

export default function LanguageSwitcher({ currentLang, mobile }: ToolsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLang, setSelectedLang] = useState<Locale>(currentLang);
  const [searchQuery, setSearchQuery] = useState('');
  const [langDialogOpen, setLangDialogOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const dict = getDictionary(currentLang);

  useEffect(() => {
    if (langDialogOpen) {
      setTimeout(() => inputRef.current?.blur(), 0);
    }
  }, [langDialogOpen]);

  const switchLanguage = (newLang: Locale) => {
    if (!pathname) return;

    // Replace the language segment in the pathname
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPath = segments.join('/');

    setLangDialogOpen(false);
    router.push(newPath);
  };

  const handleApplyLanguage = () => {
    if (selectedLang !== currentLang) {
      switchLanguage(selectedLang);
    } else {
      setLangDialogOpen(false);
    }
  };

  const filteredLocales = useMemo(() => {
    if (!searchQuery) return locales;

    const query = searchQuery.toLowerCase();
    return locales.filter(locale =>
      localeNames[locale].toLowerCase().includes(query) ||
      locale.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div>
      <Dialog open={langDialogOpen} onOpenChange={setLangDialogOpen}>
        <DialogTrigger asChild>
          {mobile ? (
            <button type="button" className="w-full px-4 py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2 min-w-0">
              <div data-svg-wrapper data-property-1="Notes" className="relative">
                <Languages className="text-gray-500 dark:text-neutral-400 " size={16} />
              </div>
              <div className="pr-1.5 flex-1 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                <SlidingLanguage />
              </div>
            </button>
          ) : (
            <div data-property-1="Default" className="self-stretch p-1.5 rounded-md inline-flex justify-between items-center" onClick={() => setLangDialogOpen(true)}>
              <a className="hover:underline cursor-pointer">
                <div className="size- flex justify-start items-center gap-1.5">
                  <div data-svg-wrapper data-property-1="Notes" className="relative">
                    <Languages className="text-gray-500 dark:text-neutral-400 " size={16} />
                  </div>
                  <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-gray-500 dark:text-neutral-400  text-sm">
                    <SlidingLanguage />
                  </div>
                </div>
              </a>
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md" allowAutoFocus={false}>
          <DialogHeader>
            <DialogTitle>{dict.language.selectLanguage}</DialogTitle>
            <DialogDescription>
              {dict.language.description}
            </DialogDescription>
          </DialogHeader>

          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={dict.language.searchMessage}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-base"
              ref={inputRef}
            />
          </div>

          {/* Language List */}
          <ScrollArea className="h-[300px] px-2">
            <RadioGroup
              value={selectedLang}
              onValueChange={(value) => setSelectedLang(value as Locale)}
              className="space-y-1 pb-2"
            >
              {filteredLocales.map((locale) => (
                <div
                  key={locale}
                  className={`flex items-center space-x-3 rounded-md border p-3 cursor-pointer transition-colors mx-1 hover:bg-gray-50 ${selectedLang === locale ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  onClick={() => setSelectedLang(locale)}
                >
                  <RadioGroupItem value={locale} id={locale} />
                  <Label
                    htmlFor={locale}
                    className="flex-1 cursor-pointer font-normal"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{localeNames[locale]}</span>
                      <span className="text-xs text-gray-500 uppercase">{locale}</span>
                    </div>
                  </Label>
                  {currentLang === locale && (
                    <Check className="h-4 w-4 text-blue-600" />
                  )}
                </div>
              ))}
            </RadioGroup>

            {filteredLocales.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                {dict.language.notFound} "{searchQuery}"
              </div>
            )}
          </ScrollArea>

          {/* Action Buttons */}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setLangDialogOpen(false);
                setSelectedLang(currentLang);
                setSearchQuery('');
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleApplyLanguage}
              disabled={selectedLang === currentLang}
            >
              Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog >
    </div >
  )
}