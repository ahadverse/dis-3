import React from "react";
import { CheckCircle2 } from "lucide-react";
import Section from "../../ui/Section";
import Reveal from "../../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../../motion/StaggerGrid";

const FEATURES = [
  {
    title: "Experienced Team",
    description:
      "WebDev gurus on the job building your website like clockwork using refined & strategic procedures for maximum functionality.",
  },
  {
    title: "Custom Solutions",
    description:
      "Your Business is unique, we'll calibrate your website to represent your business in the most organic way possible.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We aim for client satisfaction as our primary focus, bridging the gap between requirements & our capabilities.",
  },
];

const Business_web = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
        <Reveal direction="right" className="order-2 w-full lg:order-1 lg:w-6/12">
          <StaggerGrid className="space-y-6 sm:space-y-8">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                  <CheckCircle2 className="h-7 w-7 flex-shrink-0 text-accent-blue-400 sm:h-9 sm:w-9" />
                  {feature.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-text-secondary sm:text-lg md:text-xl">
                  {feature.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Reveal>
        <Reveal direction="left" className="order-1 flex w-full justify-center lg:order-2 lg:w-5/12">
          <img
            src="/bw.png"
            className="h-auto w-full max-w-md lg:max-w-full"
            alt="Business Web"
          />
        </Reveal>
      </div>
    </Section>
  );
};

export default Business_web;
