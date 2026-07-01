import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section8 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img src="/digital7.webp" className="w-full" alt="Expose Your Business" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Expose Your Business For The Maximum Outcome
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            It should come as no surprise that having quality content on your
            website is an essential part of increasing your company&apos;s
            online presence. The phrase &quot;content is king,&quot; made famous
            by Bill Gates, is often used by the most successful marketers as if
            it were a mantra. Nevertheless, in order to demonstrate to you the
            even greater significance of context, we would want to adopt a
            somewhat different method.
            <br />
            <br />
            Increased visibility and confidence among prospective consumers are
            the direct results of well-planned texts that are produced in a
            language that is both clear and optimized and that satisfies the
            needs that users have specified.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section8;
