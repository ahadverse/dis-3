import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section5 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Making Plans & Ideas
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Making plans and ideas for digital marketing requires analyzing your
            target market, determining the best platforms and strategies to reach
            them, and developing a thorough plan to meet your marketing
            objectives. This may involve activities including establishing goals,
            allocating funds, producing content, optimizing your website for
            search engines, utilizing social media, launching online adverts, and
            tracking and evaluating your outcomes.
            <br />
            <br />
            To make informed selections and gradually improve your approach, it is
            essential to stay current on industry trends while establishing plans
            for digital marketing. You should also test, iterate, and measure your
            outcomes frequently. DMS is an expert digital marketing agency. We
            know very well how to make plans and ideas to develop and boost a
            business.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital5.webp" alt="Making Plans" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section5;
