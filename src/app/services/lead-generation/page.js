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

const LeadGeneration = () => {
  return (
    <div className="bg-bg-base">
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
