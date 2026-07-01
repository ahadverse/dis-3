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

const SEO = () => {
  return (
    <div className="bg-bg-base">
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
