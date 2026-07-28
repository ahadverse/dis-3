"use client";

import { usePathname } from "next/navigation";
import Header from "./header/header";
import Footer from "./footer/footer";
import SiteBackground from "./SiteBackground";
import ScrollButton from "@/lib/ScrollButton";
import PageTransition from "@/components/motion/PageTransition";

export default function AppChrome({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <SiteBackground />}
      {!isDashboard && <Header />}
      <PageTransition>{children}</PageTransition>
      <ScrollButton />
      {!isDashboard && <Footer />}
    </>
  );
}
