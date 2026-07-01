import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section10 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital11.webp" alt="Facebook Ads" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Facebook Ads
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Facebook is a giant platform for promoting a business through
            organic and paid marketing. Facebook Ads is a paid marketing that is
            very popular for maximum business owners. Monthly more than 2
            billion people use Facebook. Facebook&apos;s popularity in product
            and service marketing is increasing daily.
            <br />
            <br />
            Facebook Ads allows advertisers to target particular audiences based
            on geography, interests, behaviors, and demographics. You can run
            your ads in various formats, for instance, videos, images,
            carousels, etc. Advanced Facebook ads are much more controlled, and
            targeted advertising campaigns should be run by an experienced ad
            expert. DMS has enough Facebook ad experts.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section10;
