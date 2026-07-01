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

const Website = () => {
  return (
    <div className="bg-bg-base">
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
