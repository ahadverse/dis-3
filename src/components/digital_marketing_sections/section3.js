import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section3 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital3.png" alt="Market Research" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-3xl font-bold text-text-primary sm:text-left sm:text-4xl">
            Market Research & Competitors Analysis
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Market Research and Competitors Analysis is a significant portion of
            any business. Because of which business you are looking to build,
            you must know about the market demand and competition in that
            particular niche. To know all this, you must do market research and
            competitor analysis.
            <br />
            <br />
            DMS implements the highest strategy for market research and
            competitor analysis to give you a detailed audit report. By having
            the information, you will get a clear conception of your
            business&apos;s market demand and competition, which will help you
            in decision-making.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section3;
