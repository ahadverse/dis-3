import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section11 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Why Choose DIS for Lead Generation?
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            With over 12 years of experience, DIS has helped hundreds of
            businesses build predictable, scalable lead generation systems. Our
            proven methodologies combine strategic thinking, creative execution,
            and data-driven optimization to deliver consistent results.
            <br />
            <br />
            We don't believe in one-size-fits-all solutions. Every business is
            unique, and we take the time to understand your goals, challenges, and
            target audience. Our customized strategies are designed to work
            specifically for your business, delivering the quality and quantity of
            leads you need to achieve your growth objectives. Partner with us to
            transform your lead generation and accelerate your business growth.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img src="/team.webp" className="w-full" alt="Why Choose Us" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section11;
