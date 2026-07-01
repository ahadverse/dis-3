import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section10 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm10.webp" alt="Optimize Your Accounts" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Optimize Your Accounts
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            You need to make sure that your social media profiles are
            optimized. For example, fill in your profile biography, set your
            profile photo or logo, check whether the resolution of the image
            or logo is correct or not, add your business website link or
            check whether the links are working, and add your contact number
            and address. Our social media experts will optimize your
            accounts in the best way.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section10;
