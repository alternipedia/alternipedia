import { Geist, Geist_Mono } from "next/font/google";
import SwRegister from "@/app/components/pwa/SwRegister";
import CookieBanner from "@/app/(client-renders)/cookie-banner";
import { Providers } from "@/app/(client-renders)/providers";
import { Suspense } from "react";
import PageView from "@/app/(client-renders)/page-view";
import Script from "next/script";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Encyclopedia",
    "name": "Alternipedia",
    "url": "https://alternipedia.org",
    "description": "An open encyclopedia showing ideological perspectives on each topic.",
    "sameAs": [
      "https://wikipedia.org",
      "https://grokipedia.com",
    ]
  };
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("theme")?.value;
  const htmlClass = cookieTheme === "dark" ? "dark" : undefined;

  return (
    <html className={htmlClass}>
      <head>
        {/* PWA: web manifest and theme color */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="google-adsense-account" content="ca-pub-7936619142942349" />
        <meta name="google-site-verification" content="SrQ_rlBoc9Zy29IslbozDC_bZoEt9KgXEcIriKcUmRA" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7936619142942349" crossOrigin="anonymous" />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* Theme is initialized server-side from the `theme` cookie (if present).
            The client ThemeProvider now writes this cookie so subsequent requests
            will render with the correct initial class and avoid hydration mismatches. */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Suspense fallback={null}>
          <PageView />
        </Suspense> */}
        <SwRegister />
        <Providers>
          {children}
        </Providers>
        <CookieBanner />
      </body>
    </html>
  );
}