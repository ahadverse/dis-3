import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section12 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital12.webp" alt="SMS Marketing" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            SMS Marketing
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            SMS Marketing SMS marketing is a popular marketing method through
            which you can target your desired audience. It is mobile marketing
            which is done by collecting lead numbers and marketing using text
            messages.
            <br />
            <br />
            SMS marketing is a cost-effective marketing method that can be done
            very quickly. Copywriting is the most critical aspect of SMS
            marketing because if your short message text is not catchy enough,
            the consumer will not be attracted to your service or product.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section12;
