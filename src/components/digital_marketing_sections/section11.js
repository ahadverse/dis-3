import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section11 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Google Ads
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Google Ad is a Google-recognized paid advertising process. You can
            promote your product or service through Google Ads by following
            Google&apos;s rules and regulations.
            <br />
            <br />
            Through Google Ad., you will always get the desired audience, because,
            in the process of Google Search Ad., the consumers will search for
            your service or product according to their needs. Due to this the
            conversion rate increases. DMS provides a variety of google ads such
            as google search ads, Display ads, Video ads, Shopping ads, App ads,
            etc.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital10.webp" alt="Google Ads" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section11;
