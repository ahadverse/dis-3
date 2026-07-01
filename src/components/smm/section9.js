import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section9 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Social Media Marketing Services We Offer
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            As the best social media marketing services agency, we offer
            diverse types of social media marketing services like Facebook
            marketing, Instagram marketing, Twitter marketing, LinkedIn
            marketing, Pinterest, Tumbler, Reddit, Tiktok marketing, etc. If
            you need something better for your business then you should
            choose us to drive your brand to the next level.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm9.webp" alt="Social Media Marketing Services We Offer" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section9;
