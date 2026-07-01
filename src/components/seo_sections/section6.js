import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section6 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img src="/seo6.webp" className="w-full" alt="We Promise Our Best" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            We Promise To Give Our Best To You
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            We at DMS are available to help with these significant requisites at
            your request. You may discover what search engine optimization is,
            why it is essential for websites, and what kind of services an SEO
            business like ours normally provides as part of its packages on this
            page. Think of what you&apos;re about to read as a crash course in
            search engine optimization and all it can accomplish for your
            website! As a reliable and best SEO service provider in Bangladesh,
            we promise to give 100% positive results to our clients. It&apos;s
            already proven that we are pretty successful in our previous works.
            <br />
            <br />
            Our professional expert panels are cordially dedicated to our client
            support with well Search Engine Optimization tools and equipment. We
            ensure our clients&apos; tremendous investment with a proven record
            of their website before and where it is now. Then it would help if
            you worked on SEO.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section6;
