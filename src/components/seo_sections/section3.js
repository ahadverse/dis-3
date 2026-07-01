import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section3 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img src="/seo4.webp" className="w-full" alt="Search Engine Strategy" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-3xl font-bold text-text-primary sm:text-left sm:text-4xl">
            Any Business Can Adopt Search Engine Strategy
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            It doesn&apos;t matter what size your business is. You can do SEO to
            reach your destination easily and quickly. The strategy can be
            beneficial for small, medium, or large companies. It can increase
            your business popularity and visibility worldwide by ranking your
            website in search engines. Even if your business is targeted
            locally, It can help target local people in your area who search for
            the exact product you are selling.
            <br />
            <br />
            Being the best SEO service provider in Bangladesh, DMS ensures
            comprehensive GMB optimization for your site and provides all the
            other Google My Business services.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section3;
