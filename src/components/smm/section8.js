import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section8 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm8.webp" alt="Our Time-Tested, Successful Social Media Marketing Method" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Our Time-Tested, Successful Social Media Marketing Method
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            We will assign an expert and dedicated social media manager to
            optimize your accounts and make a strong strategy to develop
            business policies. First of all, he will research your business
            or industry and then execute his strategies on your accounts.
            You can easily get in touch with the expert who will be
            appointed by us for your business.
            <br />
            <br />
            By doing this you will know whether your works are being
            recommended or how much has been done and you can share your
            opinion or suggestion with him if you want. That will be the
            best strategy for any business.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section8;
