import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section7 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Strengthen Your Brand&apos;s Credibility With Us
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Simply having social media accounts for your brand or business is
            very important because it will increase the credibility of your
            brand or business. If your brand or business does not have
            social media accounts, or if the accounts are not regularly
            updated and optimized, then these social media accounts will not
            be of any use to your business. Unoptimized accounts will do
            nothing to build trust with your customers. So today optimizing
            social media and giving regular updates have become very
            important to stabilize a business.
            <br />
            <br />
            Give the responsibility of your site to experts who know about
            technical SEO services, link building, and advanced keyword
            research profoundly, and see how it will give your investment
            return
            <br />
            <br />
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm7.webp" alt="Strengthen Your Brand's Credibility With Us" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section7;
