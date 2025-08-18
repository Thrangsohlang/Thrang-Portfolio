// // NEW LAYOUT
// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
// import "../styles/globals.css";
// import Header from "@/components/Header";
// import { ReactNode } from "react";


// export const metadata:Metadata = {
//   title: "Thrang Portfolio",
//   description: "Portfolio Website"
// }

// export default function RootLayout ({ children }: { children: ReactNode }) {
//   return (
//     <html
//     lang="en"
//     className={`${GeistSans.variable} ${GeistMono.variable}`} 
//     >
//       <body className="bg-gray-50 text-gray-800">
//         <Header />
//         <main className="pt-20">{children}</main>
//       </body>
//     </html>
//   );
// };

import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {
  site,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_URL,
  SITE_LOCALE,
  SITE_CREATOR,
  jsonLdPerson,
  ogImageUrl,
  twitterImageUrl,
} from "@/lib/site";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_CREATOR,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: SITE_LOCALE,
    images: [
      {
        url: ogImageUrl(), // handled by app/opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TITLE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CREATOR,
    creator: SITE_CREATOR,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [twitterImageUrl()], // handled by app/twitter-image.tsx
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
      // { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = jsonLdPerson(site);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          GeistSans.variable,
          GeistMono.variable,
          "font-sans antialiased",
          "min-h-dvh bg-[--color-background] text-[--color-foreground]",
        ].join(" ")}
      >
        {/* A11y: skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[--color-surface] focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        
        <ThemeProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* Structured Data */}
        <Script id="ld-person" type="application/ld+json">
          {JSON.stringify(ld)}
        </Script>

        
      </body>
    </html>
  );
}
