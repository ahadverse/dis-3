import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section2 = () => {
  return (
    <Section background="surface1">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm2.webp" alt="Short Summary Of Social Media Marketing" />
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Short Summary Of Social Media Marketing
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Social media marketing uses Social Media platforms to connect
            with your audience to build a Brand, Increase sales, and drive
            website traffic. It helps you to target a specific community,
            age, location, and many more. The best thing about SMM is that it
            is cost-effective. Whether you want to sell your product or
            service, you can advertise them at less cost with so many people
            than doing it physically and practically.
            <br />
            <br />
            Your website may not be ranking as highly as it should be, and
            the quickest and most effective method to figure out why is to
            have a full audit performed. Our SEO Audit agency is completely
            open and honest, and we examine the technical, on-page, and
            off-page aspects of your website.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Section2;
