import React from "react";
import Section from "../ui/Section";
import Reveal from "../motion/Reveal";

const Section9 = () => {
  return (
    <Section background="base">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <Reveal direction="right" className="w-full sm:w-6/12">
          <h1 className="text-center font-display text-2xl font-bold text-text-primary sm:text-left sm:text-3xl">
            Video Marketing Services
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            Video marketing means creating video content and sharing it to promote
            a brand. Videos will be descriptive, describing your products or
            services in detail through video creation. You can do video marketing
            on various mediums like Facebook, YouTube, Twitter, Instagram, etc.
            <br />
            <br />
            Video marketing is crucial for a business because it can convince
            customers quickly. People prefer to watch video content rather than
            read it because it doesn&apos;t waste time, and they can easily
            understand the quality of the products by watching the video.
          </p>
        </Reveal>
        <Reveal direction="left" className="w-full sm:w-6/12">
          <img className="w-full" src="/digital9.webp" alt="Video Marketing" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Section9;
