import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section5 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            How Social Media Marketing Can Help Your Business To Grow
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            As an investor and business owner, the question may arise in your
            mind how social media can help your business grow? If this
            question arises in your mind, you should know that most
            companies worldwide are making huge profits by selling their
            products through social campaigning. Research shows that 90% of
            marketers claim that social media marketing has improved the
            visibility of their company.
            <br />
            <br />
            91 percent of retail brands use at least two social media. Some
            of them are established for a long time on the market and some
            are beginners. Whatever your business age and the product, if you
            want to get profits quickly from your campaign, social media
            marketing is the best plan for you.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/smm5.webp" alt="How Social Media Marketing Can Help Your Business To Grow" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section5;
