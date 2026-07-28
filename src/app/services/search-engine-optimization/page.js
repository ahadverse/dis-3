import Banner2 from "../../../components/banner/banner2";
import Business from "../../../components/bussiness/seo/business";
import PricingSection from "../../../components/pricing/PricingSection";
import Hero from "../../../components/hero/hero_seo";
import Section1 from "../../../components/seo_sections/section1";
import Section10 from "../../../components/seo_sections/section10";
import Section2 from "../../../components/seo_sections/section2";
import Section3 from "../../../components/seo_sections/section3";
import Section4 from "../../../components/seo_sections/section4";
import Section5 from "../../../components/seo_sections/section5";
import Section6 from "../../../components/seo_sections/section6";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Section7 from "../../../components/seo_sections/section7";
import Section8 from "../../../components/seo_sections/section8";
import Section9 from "../../../components/seo_sections/section9";
import React from "react";
import Section11 from "../../../components/seo_sections/section11";
import Section from "../../../components/ui/Section";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const TITLE = "Affordable SEO Services for Small Business";
const DESCRIPTION =
  "Boost your organic traffic with affordable SEO services — technical SEO audits, local SEO, and white hat strategies from DIS Private Limited's expert consultants.";
const KEYWORDS = [
  "affordable seo services for small business",
  "seo consultant for small business",
  "monthly seo service packages",
  "local seo consultant near me",
  "technical seo audit service",
  "wordpress seo expert",
  "ecommerce seo consultant",
  "seo services for dentists",
  "seo services for lawyers",
  "seo services for plumbers",
  "seo services for roofers",
  "seo services for electricians",
  "seo services for restaurants",
  "seo services for contractors",
  "startup seo consultant",
  "seo help for local business",
  "affordable local seo expert",
  "white hat seo consultant",
  "google ranking improvement service",
  "organic traffic growth service",
];
const PAGE_URL = "/services/search-engine-optimization";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const SEO = () => {
  return (
    <div className="bg-bg-base">
      <ServiceJsonLd name="Search Engine Optimization" description={DESCRIPTION} url={PAGE_URL} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Search Engine Optimization", url: PAGE_URL },
        ]}
      />
      <Hero />
      <Section background="base">
        <Business />
      </Section>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section background="base">
        <PricingSection serviceKey="seo" />
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

export default SEO;
