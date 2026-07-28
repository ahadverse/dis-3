import Banner2 from "../../../components/banner/banner2";
import Business_web from "../../../components/bussiness/bussiness_web/business_web";
import Calibrated from "../../../components/calibrated/calibrated";
import PricingSection from "../../../components/pricing/PricingSection";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Hero from "../../../components/hero/hero_website";
import Mastered from "../../../components/mastered/mastered";
import Projects from "../../../components/projects/projects_website";
import Workflow from "../../../components/workFlow/workflow";
import Section from "../../../components/ui/Section";
import React from "react";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const TITLE = "Affordable WordPress Website Design & Development";
const DESCRIPTION =
  "Custom WordPress and ecommerce website design, development, speed optimization, and maintenance services built to grow your business online.";
const KEYWORDS = [
  "affordable wordpress website design",
  "wordpress website designer near me",
  "custom wordpress developer",
  "small business website design",
  "business website redesign service",
  "ecommerce website developer",
  "website maintenance company",
  "responsive website development",
  "landing page design service",
  "website speed optimization",
  "website bug fixing service",
  "website security service",
  "website migration service",
  "website redesign company",
  "custom business website",
  "affordable web developer",
  "cms website development",
  "startup website development",
  "website optimization service",
  "website support services",
];
const PAGE_URL = "/services/website-design-and-development";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const Website = () => {
  return (
    <div className="bg-bg-base">
      <ServiceJsonLd name="Website Design & Development" description={DESCRIPTION} url={PAGE_URL} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Website Design & Development", url: PAGE_URL },
        ]}
      />
      <Hero />
      <Business_web />
      <Calibrated />
      <Workflow />
      <Mastered />
      <Section background="surface1">
        <PricingSection serviceKey="website-design" />
      </Section>
      <Section background="base">
        <Projects />
      </Section>
      <Section background="surface1">
        <Banner2 />
      </Section>
      <Section background="base">
        <DualDirectionCarousel />
      </Section>
    </div>
  );
};

export default Website;
