import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section4 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-7/12">
          <h1 className="mb-8 text-center font-display text-3xl font-bold text-text-primary sm:mb-16 sm:text-left sm:text-5xl">
            Social Media Marketing Will Help Your Business To Earn Trust
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            It&apos;s no secret if you write good Ad copy and use a social
            media marketing strategy wisely, you will get tons of traffic
            with lots of love and share. But, what is the connection between
            branding and having lots of like and share? A study found that
            when users notice their friends are sharing and recommending
            someone&apos;s page or product, their trustworthiness increases
            towards those products and businesses.
            <br />
            <br />
            Social Media helps businesses get popularity worldwide and drive
            targeted traffic, which can help your website to get a higher
            ranking in search engines and profit margins for your business.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm3.webp" alt="Social Media Marketing Will Help Your Business To Earn Trust" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section4;
