import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section1 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            What is Lead Generation?
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Lead generation is the process of attracting and converting prospects
            into someone who has indicated interest in your company's product or
            service. It's a fundamental point in an individual's journey to
            becoming a delighted customer. DIS provides comprehensive lead
            generation services that help businesses identify, attract, and engage
            potential customers through various digital channels.
            <br />
            <br />
            Our strategic approach combines content marketing, SEO, social media
            marketing, email campaigns, and paid advertising to create a steady
            stream of qualified leads. We focus on understanding your target
            audience, creating compelling offers, and optimizing every touchpoint
            to maximize conversion rates and ROI.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/lead1.png" className="w-full" alt="Lead Generation" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section1;
