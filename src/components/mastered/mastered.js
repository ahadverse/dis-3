import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const FRAMEWORKS = [
  { image: "/tech/1.svg", name: "HTML5", framed: false },
  { image: "/tech/2.svg", name: "CSS3", framed: false },
  { image: "/tech/3.png", name: "REACT", framed: true },
  { image: "/tech/13.png", name: "NEXT", framed: true },
  { image: "/tech/5.png", name: "NODE", framed: true },
  { image: "/tech/6.png", name: "VUE", framed: true },
  { image: "/tech/12.png", name: "ANGULAR", framed: true },
];

const BUILDERS = [
  { image: "/tech/7.svg", name: "Wordpress" },
  { image: "/tech/8.svg", name: "Shopify" },
  { image: "/tech/9.svg", name: "Elementor" },
  { image: "/tech/10.svg", name: "Brick" },
  { image: "/tech/11.svg", name: "Oxygen" },
];

const Mastered = () => {
  return (
    <Section background="base">
      <Reveal direction="up">
        <h1 className="text-center font-display text-display-sm font-bold text-text-primary sm:text-display-md lg:text-display-lg">
          We&apos;ve Mastered All Major Web Builders
        </h1>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-text-secondary md:text-lg">
          Each Dev on our team has mastered major web builders, and we can
          artfully surf across a diverse line of some of the most flexible
          and unique builders out there to give your Business Website a
          unique style & feel.
        </p>
      </Reveal>
      <StaggerGrid className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:mt-16 md:gap-5 lg:grid-cols-7">
        {FRAMEWORKS.map((item) =>
          item.framed ? (
            <StaggerItem key={item.name}>
              <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-bg-surface2">
                <img className="w-1/3" src={item.image} alt={item.name} />
              </div>
              <h1 className="mt-2 text-center text-xs font-bold uppercase text-text-primary md:text-sm">
                {item.name}
              </h1>
            </StaggerItem>
          ) : (
            <StaggerItem key={item.name}>
              <img src={item.image} className="w-full" alt={item.name} />
              <h1 className="mt-2 text-center text-xs font-bold uppercase text-text-primary md:text-sm">
                {item.name}
              </h1>
            </StaggerItem>
          )
        )}
      </StaggerGrid>
      <StaggerGrid className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5">
        {BUILDERS.map((item) => (
          <StaggerItem key={item.name}>
            <img src={item.image} className="w-full" alt={item.name} />
            <h1 className="mt-2 text-center text-xs font-bold uppercase text-text-primary md:text-sm">
              {item.name}
            </h1>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
};

export default Mastered;
