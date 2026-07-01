import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section2 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital2.webp" alt="Digital Marketing" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            How to Get Maximum DIS Through Digital Marketing
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            It is possible to generate maximum DIS through digital marketing
            because, in the digital process, you can reach your marketing
            activities to specific or targeted audiences who need your promotion
            and products. By doing digital marketing, you can easily double your
            investment. In this process, campaigns are run targeting specific
            people.
            <br />
            <br />
            As we used to see in traditional marketing, it is done on TV, radio,
            billboard, newspaper, pamphlet, leaflet, etc. where the general
            audience saw your ads. In this method, you could not promote your
            product to specific people, as well as it is expensive. So it is not
            possible to generate maximum DIS in the traditional format of
            marketing.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section2;
