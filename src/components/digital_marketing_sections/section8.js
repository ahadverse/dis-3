import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section8 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital7.webp" alt="Data Marketing" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Data Driven Marketing
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Data-driven marketing means data collection, data analysis, and
            proper use. Through data-driven marketing, we can develop our
            audience setup. That is, through it, we can create a funnel for the
            targeted audience to see our ads.
            <br />
            <br />
            Digital Marketing Solution Pvt. Ltd. offers the best data-driven
            marketing services. We have a group of data-driven marketing experts
            who will make your entire data-driven process very well, like GTM
            setup, pixel setup, conversion API setup, data layer setup, enhanced
            eCommerce, GA 4 setup, browser site tracking, server-side tracking,
            etc. For this context, you can rely on DMS because we are the best
            ROI-focused digital marketing service agency for any business.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section8;
