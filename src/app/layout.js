import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";
import ThemeProvider from "@/components/shared/ThemeProvider";
import MantineThemeWrapper from "@/components/shared/MantineThemeWrapper";
import AppChrome from "@/components/shared/AppChrome";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import {
  SITE_URL,
  SITE_NAME,
  GA_ID,
  OG_IMAGE,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
} from "@/lib/seo/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/* Prevent flash of wrong theme — runs before React hydration */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('dis-theme')||'dark';document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();` }} />
        <OrganizationJsonLd />
      </head>
      <body className="bg-bg-base font-sans text-text-primary antialiased">
        <ThemeProvider>
          <MantineThemeWrapper>
            <AppChrome>{children}</AppChrome>
          </MantineThemeWrapper>
        </ThemeProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
