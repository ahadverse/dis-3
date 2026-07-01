import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section6 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Lead Qualification & Scoring
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Not all leads are created equal. Our sophisticated lead scoring
            system helps you prioritize the most promising prospects. We
            evaluate leads based on demographic information, behavioral data,
            engagement levels, and buying signals to identify those most likely
            to convert into customers.
            <br />
            <br />
            This enables your sales team to focus their efforts on high-quality
            leads, improving close rates and reducing the sales cycle. We
            continuously refine our scoring models based on conversion data,
            ensuring that the system becomes more accurate over time and
            delivers increasingly better results for your business.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Lead Nurturing & Automation
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Most leads aren't ready to buy immediately. Our lead nurturing
            campaigns keep your brand top-of-mind while educating prospects and
            building trust. We create automated email sequences, retargeting
            campaigns, and personalized content that guides leads through the
            buyer journey at their own pace.
            <br />
            <br />
            Using marketing automation platforms, we deliver the right message
            at the right time based on each lead's behavior and interests. This
            personalized approach dramatically improves conversion rates while
            requiring minimal manual effort from your team, making your lead
            generation system truly scalable.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section6;
