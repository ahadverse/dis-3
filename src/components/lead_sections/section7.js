import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section7 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Conversion Rate Optimization (CRO)
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Generating traffic is only half the battle. Our CRO services focus on
            turning more of your website visitors into leads. We analyze user
            behavior, identify friction points, and implement improvements to your
            landing pages, forms, CTAs, and overall user experience.
            <br />
            <br />
            Through systematic A/B testing and multivariate testing, we
            continuously optimize every element of your conversion funnel. Small
            improvements in conversion rates can lead to massive increases in lead
            volume and revenue, making CRO one of the highest-ROI activities in
            digital marketing.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/Leads%20Genaration.png" className="w-full" alt="CRO Services" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section7;
