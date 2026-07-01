import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section10 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img src="/digital11.webp" className="w-full" alt="Local SEO Service" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Our Advanced Local SEO Service
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            We will provide you with advanced local SEO services. By getting the
            service, you can bring certain keywords of your business to the
            first position of the search engine in a certain area in an organic
            way. Local SEO is currently the most popular marketing strategy
            through which your business will grow exponentially within a short
            period of time.
            <br />
            <br />
            So our advanced local search engine optimization service
            could be the turning point for your local business.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section10;
