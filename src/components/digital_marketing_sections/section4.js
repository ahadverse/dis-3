import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const SERVICES = [
  "Market Research",
  "Competitors Analysis ",
  "Making Plans & Ideas",
  "Brand SMS Marketing",
  "2D & 3D Video Making",
  "Social Media Marketing",
  "Creative Graphic Design",
  "Targeted Email Marketing",
  "Content/Article Development",
  "Promotional Video Marketing ",
  "Facebook Data-Driven Marketing ",
  "Search Engine Optimization-SEO",
  "Google Data-Driven Marketing Ads",
];

const Section4 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-7/12">
          <h1 className="mb-8 text-center font-display text-3xl font-bold text-text-primary sm:mb-16 sm:text-left sm:text-5xl">
            Our Most Demandable Services for Digital Marketing
          </h1>
          <p className="text-lg text-text-secondary sm:text-2xl">
            Our Most Demandable Services for Digital Marketing :
          </p>
          <StaggerGrid className="mt-3 space-y-3">
            {SERVICES.map((item) => (
              <StaggerItem key={item} className="text-lg text-text-secondary sm:text-2xl">
                {item}
              </StaggerItem>
            ))}
          </StaggerGrid>
          <span className="mt-6 block text-lg text-text-secondary sm:text-2xl">
            Google Data-Driven Marketing Ads
          </span>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-5/12">
          <img className="w-full" src="/digital4.webp" alt="Our Services" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section4;
