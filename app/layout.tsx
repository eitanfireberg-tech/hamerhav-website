import type { Metadata } from "next";
import { Noto_Serif_Hebrew, Noto_Sans_Hebrew, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SEO, SITE, SPECIALTIES, APPROACHES, DEEP_PROCESS, HERO } from "@/lib/content";

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
  keywords: [
    "פסיכותרפיסטית",
    "פסיכותרפיה",
    "טיפול רגשי",
    "CBT",
    "פסיכודרמה",
    "Focusing",
    "Somatic Experiencing",
    "טיפול זוגי",
    "חרדה",
    "דיכאון",
    "טראומה",
    "קרן בן כליפה פיירברג",
    "המרחב הבטוח לצמיחה",
    "טיפול אונליין",
    "ייעוץ נפשי",
    "הדרכת הורים",
  ],
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Psychologist",
      "@id": `${SEO.url}/#psychologist`,
      name: SITE.therapistName,
      url: SEO.url,
      telephone: SITE.phone,
      email: SITE.email,
      description: SEO.description,
      image: `${SEO.url}/og-image.jpg`,
      jobTitle: HERO.subtitle,
      knowsLanguage: ["he", "en"],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IL",
      },
      areaServed: {
        "@type": "Country",
        name: "Israel",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "שירותי טיפול",
        itemListElement: APPROACHES.cards.map((card, i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${card.title} — ${card.titleFull}`,
            description: card.description,
          },
          position: i + 1,
        })),
      },
      knowsAbout: SPECIALTIES.items.map((s) => s.he),
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SEO.url}/#service`,
      name: SITE.name,
      url: SEO.url,
      telephone: SITE.phone,
      email: SITE.email,
      description: SEO.description,
      image: `${SEO.url}/og-image.jpg`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IL",
      },
      areaServed: {
        "@type": "Country",
        name: "Israel",
      },
      provider: { "@id": `${SEO.url}/#psychologist` },
    },
    {
      "@type": "FAQPage",
      mainEntity: DEEP_PROCESS.items.map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.body,
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SEO.url}/#website`,
      url: SEO.url,
      name: SITE.name,
      description: SEO.description,
      inLanguage: "he",
      publisher: { "@id": `${SEO.url}/#psychologist` },
    },
  ],
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
        {/* Resource hints for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* PWA / Favicon */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7A9E6A" />
        <link rel="apple-touch-icon" href="/og-image.jpg" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[100] focus:bg-sage focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          דלג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
