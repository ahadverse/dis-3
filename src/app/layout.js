"use client";
import Header from "../components/shared/header/header";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import Footer from "../components/shared/footer/footer";
import { usePathname } from "next/navigation";
import ScrollButton from "@/lib/ScrollButton";
import PageTransition from "@/components/motion/PageTransition";
import SiteBackground from "@/components/shared/SiteBackground";
import { Inter, Sora } from "next/font/google";
import ThemeProvider from "@/components/shared/ThemeProvider";
import MantineThemeWrapper from "@/components/shared/MantineThemeWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang='en' suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/* Prevent flash of wrong theme — runs before React hydration */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('dis-theme')||'dark';document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();` }} />
      </head>
      <body className="bg-bg-base font-sans text-text-primary antialiased">
        <ThemeProvider>
          <MantineThemeWrapper>
            {!isDashboard && <SiteBackground />}
            {!isDashboard && <Header />}
            <PageTransition>{children}</PageTransition>
            <ScrollButton />
            {!isDashboard && <Footer />}
          </MantineThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
