import type { Metadata } from "next";
import { Noto_Serif_Hebrew, Noto_Sans_Hebrew, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SEO, SITE } from "@/lib/content";

const notoSerifHe = Noto_Serif_Hebrew({
  variable: "--font-noto-serif-he",
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansHe = Noto_Sans_Hebrew({
  variable: "--font-noto-sans-he",
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(SEO.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    siteName: SITE.name,
    locale: SEO.locale,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SEO.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: SITE.therapistName,
  url: SEO.url,
  telephone: SITE.phone,
  description: SEO.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL",
  },
  sameAs: [SITE.facebook, SITE.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${notoSerifHe.variable} ${notoSansHe.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
