// Supported locales configuration
export const locales = [
  'en',    // English
  'zh',    // Chinese (Mandarin)
  'hi',    // Hindi
  'es',    // Spanish
  'fr',    // French
  'ar',    // Arabic
  'bn',    // Bengali
  'pt',    // Portuguese
  'ru',    // Russian
  'ur',    // Urdu
  'id',    // Indonesian
  'de',    // German
  'ja',    // Japanese
  'mr',    // Marathi
  'te',    // Telugu
  'tr',    // Turkish
  'ta',    // Tamil (Sri Lankan Tamil)
  'yue',   // Cantonese
  'vi',    // Vietnamese
  'fil',   // Filipino
  'ko',    // Korean
  'ha',    // Hausa
  'arz',   // Egyptian Arabic
  'jv',    // Javanese
  'it',    // Italian
  'nl',    // Dutch
  'el',    // Greek
  'sv',    // Swedish
  'no',    // Norwegian
  'pl',    // Polish
  'th',    // Thai
  'uk',    // Ukrainian
  'ro',    // Romanian
  'cs',    // Czech
  'hu',    // Hungarian
  'fi',    // Finnish
  'da',    // Danish
  'bg',    // Bulgarian
  'sk',    // Slovak
  'hr',    // Croatian
  'lt',    // Lithuanian
  'sl',    // Slovenian
  'lv',    // Latvian
  'et',    // Estonian
  'is',    // Icelandic
  'sq',    // Albanian
  'sr',    // Serbian
  'mk',    // Macedonian
  'bs',    // Bosnian
  'cnr',   // Montenegrin
  'mt',    // Maltese
  'hb',    // Hebrew
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  hi: 'हिन्दी',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
  bn: 'বাংলা',
  pt: 'Português',
  ru: 'Русский',
  ur: 'اردو',
  id: 'Bahasa Indonesia',
  de: 'Deutsch',
  ja: '日本語',
  mr: 'मराठी',
  te: 'తెలుగు',
  tr: 'Türkçe',
  ta: 'தமிழ்',
  yue: '粵語',
  vi: 'Tiếng Việt',
  fil: 'Filipino',
  ko: '한국어',
  ha: 'Hausa',
  arz: 'مصرى',
  jv: 'Basa Jawa',
  it: 'Italiano',
  nl: 'Nederlands',
  el: 'Ελληνικά',
  sv: 'Svenska',
  no: 'Norsk',
  pl: 'Polski',
  th: 'ไทย',
  uk: 'Українська',
  ro: 'Română',
  cs: 'Čeština',
  hu: 'Magyar',
  fi: 'Suomi',
  da: 'Dansk',
  bg: 'Български',
  sk: 'Slovenčina',
  hr: 'Hrvatski',
  lt: 'Lietuvių',
  sl: 'Slovenščina',
  lv: 'Latviešu',
  et: 'Eesti',
  is: 'Íslenska',
  sq: 'Shqip',
  sr: 'Српски',
  mk: 'Македонски',
  bs: 'Bosanski',
  cnr: 'Crnogorski',
  mt: 'Malti',
  hb: 'עברית',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
