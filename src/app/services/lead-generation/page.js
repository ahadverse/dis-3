import Banner2 from "../../../components/banner/banner2";
import Business from "../../../components/bussiness/lead/business";
import PricingSection from "../../../components/pricing/PricingSection";
import Hero from "../../../components/hero/hero_lead";
import Section1 from "../../../components/lead_sections/section1";
import Section10 from "../../../components/lead_sections/section10";
import Section11 from "../../../components/lead_sections/section11";
import Section2 from "../../../components/lead_sections/section2";
import Section4 from "../../../components/lead_sections/section4";
import Section6 from "../../../components/lead_sections/section6";
import Section7 from "../../../components/lead_sections/section7";
import Section8 from "../../../components/lead_sections/section8";
import Section9 from "../../../components/lead_sections/section9";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Section from "../../../components/ui/Section";
import React from "react";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const TITLE = "B2B Lead Generation Services & Agency";
const DESCRIPTION =
  "Fill your pipeline with qualified leads — B2B and real estate lead generation, appointment setting, and email/LinkedIn lead generation services.";
const KEYWORDS = [
  "b2b lead generation company",
  "lead generation expert",
  "lead generation agency",
  "real estate lead generation",
  "contractor lead generation",
  "local business lead generation",
  "sales lead generation service",
  "appointment setting service",
  "email lead generation",
  "linkedin lead generation",
  "business leads provider",
  "qualified business leads",
  "online lead generation company",
  "lead generation consultant",
  "lead generation services usa",
];
const PAGE_URL = "/services/lead-generation";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const LeadGeneration = () => {
  return (
    <div className="bg-bg-base">
      <ServiceJsonLd name="Lead Generation" description={DESCRIPTION} url={PAGE_URL} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Lead Generation", url: PAGE_URL },
        ]}
      />
      <Hero />
      <Section background="base">
        <Business />
      </Section>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section background="base">
        <PricingSection serviceKey="lead-generation" />
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

export default LeadGeneration;
