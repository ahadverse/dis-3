import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section6 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm6.webp" alt="We Are Promised To Give You Full Support To Achieve Your Aim" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            We Are Promised To Give You Full Support To Achieve Your Aim
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            If you want to get more sales, build brand awareness, and wish to
            reach more people by spending less, social media marketing is the
            right tool you should adopt for your business and a Dedicated
            Social Media Marketing agency. Once you join us to boost your
            profit and brand reorganization, we are committed to providing
            you with a higher ROI (Return on Investment). Our social media
            marketing expert team is individually dedicated to their work and
            promised to deliver 100% best performance.
            <br />
            <br />
            Our professional expert panels are cordially dedicated to our
            client support with well Search Engine Optimization tools and
            equipment. We ensure our clients tremendous investment with a
            proven record of their website before and where it is now. Then
            it would help if you worked on SEO.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section6;
