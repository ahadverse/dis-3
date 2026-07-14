import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section9 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            B2B Lead Generation Expertise
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            B2B lead generation requires a different approach than B2C. We
            understand the complexities of longer sales cycles, multiple
            decision-makers, and higher-value transactions. Our B2B lead
            generation strategies focus on building thought leadership, creating
            valuable content, and establishing trust with key stakeholders.
            <br />
            <br />
            We leverage LinkedIn marketing, industry-specific content,
            account-based marketing (ABM), and strategic partnerships to reach
            decision-makers in your target companies. Our approach generates not
            just leads, but qualified opportunities that your sales team can
            convert into long-term, high-value customers.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/B2B%20Leads%20Genaration.png" className="w-full" alt="B2B Lead Generation" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section9;
