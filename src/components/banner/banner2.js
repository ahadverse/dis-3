import React from "react";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";

const Banner2 = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface1 px-4 py-12 sm:px-6 md:px-10 md:py-20">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-blue-400/10 blur-[120px]" />

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-0">
        <Reveal direction="right" className="flex w-full flex-col items-center justify-center text-center md:w-6/12 md:items-start md:text-left">
          <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Our Websites Might Make Your Business{" "}
            <span className="text-accent-blue-500">Too Successful!</span>
          </h1>
          <div className="mt-6 w-full">
            <Calender_Modal />
          </div>
        </Reveal>
        <Reveal direction="left" className="mt-6 flex w-full justify-center md:mt-0 md:w-6/12 md:justify-end">
          <img className="w-full max-w-md object-contain md:w-10/12" src="/web11.png" alt="Web design illustration" />
        </Reveal>
      </div>
    </div>
  );
};

export default Banner2;
