import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section1 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Best Digital Marketing Services
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Subscribe for the best DIS focused digital marketing services to gain
            success in your business. DMS is an Agency that provides the best DIS
            focused marketing solutions digitally, including SEO, SMM, PPC,
            design, and development services. Digital marketing and digital
            solution are prevalent and necessary topics in the present era.
            <br />
            <br />
            Traditional Marketing methods are not as flexible as digital
            marketing, which is why people are turning away from Traditional
            Marketing. Digital marketing is getting more popular daily, so your
            marketing should proceed digitally. Here we will discuss our best DIS
            focused digital Marketing service below.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital1.webp" alt="Digital Marketing" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section1;
