import type { Metadata, Viewport } from "next";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { JetBrains_Mono, Montserrat, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

faConfig.autoAddCss = false;

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800", "900"],
  display: "swap",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.handle} — ${site.tagline}`,
    template: `%s · ${site.handle}`,
  },
  description: site.description,
  keywords: [
    "Android development",
    "Kotlin",
    "Jetpack Compose",
    "software architecture",
    "software engineering",
    "programming blog",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${site.url}/feed.xml` },
  },
  openGraph: {
    type: "website",
    siteName: site.handle,
    title: `${site.handle} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.handle} — ${site.tagline}`,
    description: site.description,
    creator: site.handle,
    site: site.handle,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: `${site.handle} — ${site.tagline}`,
  alternateName: site.handle,
  url: site.url,
  description: site.description,
  inLanguage: "en",
  publisher: { "@type": "Person", name: site.name, url: site.url },
};

const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  alternateName: site.handle,
  description: site.author.bio,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  sameAs: [site.portfolioUrl, site.githubUrl, site.linkedinUrl, site.xUrl].filter(Boolean),
};

export const viewport: Viewport = {
  themeColor: "#F8F9FA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <JsonLd data={webSiteJsonLd} />
        <JsonLd data={authorJsonLd} />
        <Header />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
