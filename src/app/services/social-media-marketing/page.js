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

const SocialMarketing = () => {
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
