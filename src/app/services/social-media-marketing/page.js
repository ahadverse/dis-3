import Banner2 from "../../../components/banner/banner2";
import Business from "../../../components/bussiness/smm/business";
import PricingSection from "../../../components/pricing/PricingSection";
import Hero from "../../../components/hero/hero_social";
import Section1 from "../../../components/smm/section1";
import Section10 from "../../../components/smm/section10";
import Section11 from "../../../components/smm/section11";
import Section2 from "../../../components/smm/section2";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Section3 from "../../../components/smm/section3";
import Section4 from "../../../components/smm/section4";
import Section5 from "../../../components/smm/section5";
import Section6 from "../../../components/smm/section6";
import Section7 from "../../../components/smm/section7";
import Section8 from "../../../components/smm/section8";
import Section9 from "../../../components/smm/section9";
import Section from "../../../components/ui/Section";
import React from "react";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const TITLE = "Social Media Marketing Services for Small Business";
const DESCRIPTION =
  "Affordable social media marketing, content creation, and management services to grow your brand — trusted by small businesses and startups.";
const KEYWORDS = [
  "affordable social media marketing services",
  "social media marketing for small business",
  "social media marketing agency for startups",
  "social media management services",
  "social media manager for small business",
  "social media marketing consultant",
  "social media growth services",
  "social media branding services",
  "social media content creation services",
  "social media strategy consultant",
  "social media advertising services",
  "social media campaign management",
  "social media marketing expert",
  "outsource social media management",
  "local social media marketing agency",
];
const PAGE_URL = "/services/social-media-marketing";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const SocialMarketing = () => {
  return (
    <div className="bg-bg-base">
      <ServiceJsonLd name="Social Media Marketing" description={DESCRIPTION} url={PAGE_URL} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Social Media Marketing", url: PAGE_URL },
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
        <PricingSection serviceKey="smm" />
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

export default SocialMarketing;
