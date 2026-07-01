import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const SERVICES = [
  "Target Audience Research & Persona Development",
  "Lead Magnet Creation (eBooks, Whitepapers, Tools)",
  "Landing Page Design & Optimization",
  "Content Marketing Strategy",
  "Email Marketing Campaigns",
  "Social Media Lead Generation",
  "PPC & Display Advertising",
  "SEO & Organic Lead Generation",
  "Marketing Automation Setup",
  "Lead Scoring & Qualification",
  "CRM Integration",
  "Conversion Rate Optimization",
  "Analytics & Performance Tracking",
];

const Section4 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full">
          <h1 className="mb-8 text-center font-display text-3xl font-bold text-text-primary sm:mb-16 sm:text-left sm:text-3xl">
            Our Lead Generation Services Include
          </h1>
          <StaggerGrid className="mt-6 space-y-3">
            {SERVICES.map((item) => (
              <StaggerItem key={item} className="text-lg text-text-secondary sm:text-2xl">
                {item}
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section4;
