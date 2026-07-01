import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section8 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/lead8.webp" alt="Analytics" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Data-Driven Analytics & Reporting
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            We believe in transparent, data-driven decision making. Our
            comprehensive analytics and reporting give you complete visibility
            into your lead generation performance. Track key metrics like cost
            per lead, lead quality scores, conversion rates, and ROI across all
            channels in real-time.
            <br />
            <br />
            Our detailed monthly reports break down performance by channel,
            campaign, and audience segment. We provide actionable insights and
            recommendations for continuous improvement, ensuring your lead
            generation strategy evolves with your business and market
            conditions.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section8;
