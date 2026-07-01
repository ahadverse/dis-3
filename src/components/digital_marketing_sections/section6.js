import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section6 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/digtal6.webp" alt="SEO Services" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Best SEO Service Provider
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            We provide the best SEO service for small, medium, and large
            businesses. Suppose you are a doctor, real estate business owner, or
            plumber. Now you want your organic online presence. If someone
            searches by writing your desired keyword on Google or any search
            engine, they will find you quickly.
            <br />
            <br />
            Then it would help if you worked on SEO. If you want to organically
            occupy the first position in Google results, you must do SEO for
            your website. In this case, DMS will provide you with affordable SEO
            services that will quickly bring your business or website to the
            first position of Google search results. We will suggest the most
            trending and searchable keywords with low difficulties, top-class
            content optimization, on-page SEO, technical solution, and off-page,
            which means link-building services.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section6;
