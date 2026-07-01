import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section3 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img
            className="w-full"
            src="/lead3.webp"
            alt="Multi-Channel Approach"
          />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section3;
