import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section13 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Account Manager
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Social media account management is a vital part of an online business
            because an online business must have social media accounts. With
            social media accounts, you will be able to get success in online
            business. Every social media account always needs to be managed, like
            account optimization, regular posting, increasing account engagement,
            etc.
            <br />
            <br />
            Every social media account always needs to be managed, like account
            optimization, regular posting, increasing account engagement, etc. We
            have authentic certifications from Google and Facebook, so we know how
            to manage your social media accounts to increase engagement and
            conversions on your page.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital13.webp" alt="Account Manager" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section13;
