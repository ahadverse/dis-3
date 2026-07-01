import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section1 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Social Media Marketing Strategies
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            DMS is the best social media marketing service agency for small,
            medium, and large businesses. We got reputations all around the
            Globe because we are working in this field for around 12 years.
            We are committed to our customers to provide a high return on
            Investment ( ROI ). That is why you should rely on us without any
            hesitation.
            <br />
            <br />
            Social media marketing is one of the best and quickest ways to
            drive traffic to a website. Nowadays, People use social networks
            to keep in touch with each other. The research found that 4.8
            billion people worldwide are actively using social media,
            including Facebook, Twitter, Pinterest, LinkedIn, etc. Social
            media marketing is an authentic way to drive traffic to your
            website through social media.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm1.webp" alt="Social Media Marketing Strategies" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section1;
