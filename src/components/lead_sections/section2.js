import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section2 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Multi-Channel Lead Generation
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Today's buyers interact with brands across multiple touchpoints
            before making a purchase decision. Our multi-channel lead generation
            strategy ensures you're visible wherever your potential customers
            are looking. We leverage SEO, content marketing, social media, email
            marketing, PPC advertising, and webinars to create multiple pathways
            for lead acquisition.
            <br />
            <br />
            Each channel is carefully integrated and optimized to work together
            seamlessly. We track performance across all channels, identify what
            works best for your business, and allocate resources accordingly to
            maximize lead quality and quantity while maintaining cost
            efficiency.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Strategic Lead Generation Process
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Our lead generation process is designed to deliver high-quality
            leads that convert. We start by identifying your ideal customer
            profile, understanding their pain points, and mapping their buyer
            journey. This research forms the foundation of our targeted
            campaigns across multiple channels.
            <br />
            <br />
            We create compelling lead magnets, optimize landing pages, implement
            marketing automation, and continuously test and refine our
            strategies. Our data-driven approach ensures that every dollar spent
            on lead generation delivers maximum return, helping you grow your
            business with a predictable and scalable lead pipeline.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section2;
