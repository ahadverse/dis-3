import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section5 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img src="/lead5.webp" className="w-full" alt="Lead Qualification" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section5;
