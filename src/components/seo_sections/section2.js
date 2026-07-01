import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section2 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img src="/seo2.png" className="w-full" alt="SEO Strategy" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Summary Of The SEO Strategy
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Summary Of The SEO Strategy Search engine optimization is a proven
            way to give your business website quick results by reaching organic
            visitors and targeted visitors. It consists of targeted keywords for
            business or individual websites and suggests a targeted website in
            the top list of search engines, ensuring more organic traffic to the
            company or particular website. An effective On-page and off-page
            detail audit report can also help to get ranked in the search
            engines and increases the chance of more profitability from
            searchers.
            <br />
            <br />
            Your website may not be ranking as highly as it should be, and the
            quickest and most effective method to figure out why is to have a
            full audit performed. Our SEO Audit agency is completely open and
            honest, and we examine the technical, on-page, and off-page aspects
            of your website.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section2;
