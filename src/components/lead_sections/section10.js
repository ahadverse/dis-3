import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section10 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img
            className="w-full"
            src="/internet.png"
            alt="Marketing Technology"
          />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Marketing Technology & Tools
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            We leverage the latest marketing technology to streamline and scale
            your lead generation efforts. From CRM platforms like HubSpot and
            Salesforce to automation tools like Marketo and Pardot, we help you
            build a powerful marketing technology stack tailored to your needs.
            <br />
            <br />
            Our team has expertise in implementing, integrating, and optimizing
            these tools to work together seamlessly. We'll help you choose the
            right technology for your budget and goals, set it up correctly, and
            train your team to use it effectively for maximum ROI.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section10;
