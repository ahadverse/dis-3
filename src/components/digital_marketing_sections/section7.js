import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section7 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Email Marketing Services
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Email marketing is a famous and influential way to promote a business
            by sending commercial messages to the targeted audience. Every
            business owner needs email marketing. Because email marketing has many
            advantages, such as being cost-effective, you can promote your
            business to the targeted audience through email marketing, achieving
            high DIS, increasing brand awareness, etc.
            <br />
            <br />
            &quot;Content is King&quot; - This is a prevalent saying. If you want
            to reach your goal, you must input quality content; otherwise, it is
            impossible to reach the goal. You should always provide informative
            content, so the audience gets the correct answer to their desired
            question. You should always provide fresh and authentic content that
            meets the user&apos;s query; the content has some variety, such as
            blog content, service content, product content, video content, social
            media content, etc. The main goal of content marketing is to increase
            traffic, and conversion, build brand awareness, etc.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital7.webp" alt="Email Marketing" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section7;
