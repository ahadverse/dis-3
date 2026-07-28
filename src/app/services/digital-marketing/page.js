import Banner2 from "../../../components/banner/banner2";
import Business from "../../../components/bussiness/digital/business";
import PricingSection from "../../../components/pricing/PricingSection";
import Section1 from "../../../components/digital_marketing_sections/section1";
import Section10 from "../../../components/digital_marketing_sections/section10";
import Section11 from "../../../components/digital_marketing_sections/section11";
import Section12 from "../../../components/digital_marketing_sections/section12";
import Section13 from "../../../components/digital_marketing_sections/section13";
import Section2 from "../../../components/digital_marketing_sections/section2";
import Section3 from "../../../components/digital_marketing_sections/section3";
import Section4 from "../../../components/digital_marketing_sections/section4";
import Section5 from "../../../components/digital_marketing_sections/section5";
import Section6 from "../../../components/digital_marketing_sections/section6";
import Section7 from "../../../components/digital_marketing_sections/section7";
import Section8 from "../../../components/digital_marketing_sections/section8";
import Section9 from "../../../components/digital_marketing_sections/section9";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Hero from "../../../components/hero/hero_digital";
import Section from "../../../components/ui/Section";

import React from "react";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const TITLE = "Facebook & Meta Ads Management Services";
const DESCRIPTION =
  "Grow your business with expert Facebook and Instagram ads management, lead generation campaigns, and Meta ads optimization from DIS Private Limited.";
const KEYWORDS = [
  "facebook ads management",
  "facebook ads expert",
  "facebook marketing agency",
  "facebook lead generation",
  "facebook ads consultant",
  "local business facebook ads",
  "facebook campaign management",
  "facebook advertising service",
  "facebook ads optimization",
  "meta ads expert",
  "instagram ads management",
  "social media advertising",
  "paid social marketing",
  "facebook ads audit",
  "affordable facebook ads",
];
const PAGE_URL = "/services/digital-marketing";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const DigitalMarketing = () => {
  return (
    <div className="bg-bg-base">
      <ServiceJsonLd name="Digital Marketing" description={DESCRIPTION} url={PAGE_URL} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Digital Marketing", url: PAGE_URL },
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
      <Section12 />
      <Section13 />
      <Section background="base">
        <PricingSection serviceKey="digital-marketing" />
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

export default DigitalMarketing;
