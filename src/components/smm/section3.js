import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section3 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm4.webp" alt="Social Media Marketing Cost-Effective But Give Big Result" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-3xl font-bold text-text-primary sm:text-left sm:text-4xl">
            Social Media Marketing Cost-Effective But Give Big Result
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Most people feel marketing is expensive because of the
            traditional marketing method. Also, It&apos;s painful for a
            person to invest lots of money in marketing without faith. If you
            are looking for cost-effective marketing, SMM is the best
            marketing process to achieve your desired success. Just think, if
            you do any campaign, how many people you can reach and invite to
            see your products?
            <br />
            <br />
            Maximum 500 people in one day but by doing SMM advertisement, you
            can reach over a thousand people in just a couple of minutes.
            It&apos;s not just about saving money on advertising; It will
            help you maintain your time with increasing brand popularity. So
            you need the best social media marketing services agency for
            Cost-Effective SMM services
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section3;
