"use client";
import Header from "../components/shared/header/header";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/shared/footer/footer";
import { usePathname } from "next/navigation";
import ScrollButton from "@/lib/ScrollButton";
import PageTransition from "@/components/motion/PageTransition";
import SiteBackground from "@/components/shared/SiteBackground";
import { Inter, Sora } from "next/font/google";

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
    <html lang='en' className={`dark ${inter.variable} ${sora.variable}`}>
      <body className={`bg-bg-base font-sans text-text-primary antialiased`}>
        <MantineProvider defaultColorScheme='dark'>
          {!isDashboard && <SiteBackground />}
          {!isDashboard && <Header />}
          <PageTransition>{children}</PageTransition>
          <ScrollButton />
          {!isDashboard && <Footer />}
        </MantineProvider>
      </body>
    </html>
  );
}
