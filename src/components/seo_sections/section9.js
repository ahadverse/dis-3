import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section9 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Deliver the Right Message to Get the Most Benefits
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Since Google released the Panda update in 2011, one of the most
            important components of search engine optimization has been creating
            high-quality content. The search engine&apos;s attention is now being
            directed to the high relevancy of the content that is provided on your
            website, as well as the value that it may offer to the user.
            <br />
            <br />
            Active content generation may be used by the vast majority of
            websites. However, not all of those websites believe it to be
            productive. The reason for this is that optimizing written material is
            required in order to make the most of its potential. Copywriting
            optimized for search engines is a direct response to search engines
            requirements for high-quality materials.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/seo9.webp" className="w-full" alt="Deliver the Right Message" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section9;
