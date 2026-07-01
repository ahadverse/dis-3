import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section7 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Reaching Business Goals From SEO
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            There are billions of websites on search engines. More are going to
            enter too. Now you just need to decide where you would like to see
            your business. If you don&apos;t want to be one of those who has had a
            website for a couple of years and still struggling with getting it
            ranked and making a profit from it, don&apos;t waste your time
            anymore.
            <br />
            <br />
            Give the responsibility of your site to experts who know about
            technical SEO services, link building, and advanced keyword research
            profoundly, and see how it will give your investment return
            <br />
            <br />
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/seo7.webp" className="w-full" alt="Reaching Business Goals" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section7;
