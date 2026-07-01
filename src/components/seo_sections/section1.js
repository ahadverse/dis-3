import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section1 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Search Engine Optimization
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Digital Marketing Solution Pvt Ltd is the best SEO service provider in
            Bangladesh. We are skilled in full-stack digital marketing services.
            DMS has over 12 years of experience in this particular section. We
            offer professional and affordable SEO services to get more customers
            from all Search Engines. DMS provides advanced Local SEO services,
            Global Search Engine Optimization services, On-page and off-page
            detail audit reports, profitable keyword research, optimized content
            writing, on-page strategies implementation, and off-page or
            link-building services.
            <br />
            <br />
            SEO is the proper area for all kinds of business growth. Implementing
            the right and appropriate strategy can bring success faster, rather
            than enforcing physical marketing policies. Online marketing
            strategies consist of several parts. Search Engine Optimization is one
            of them.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/seo1.webp" className="w-full" alt="Search Engine Optimization" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section1;
