import React from "react";
import Calender_Modal from "../calendermodal/calendermodal";
import Reveal from "../motion/Reveal";

const Banner1 = () => {
  return (
    <div className='relative overflow-hidden rounded-2xl border border-border-subtle bg-black px-4 py-12 sm:px-6 md:px-10 md:py-20'>
      <div className='pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent-blue-500/20 blur-[120px]' />
      <div className='pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-blue-400/10 blur-[120px]' />

      <Reveal
        direction='up'
        className='relative flex flex-col items-center text-center'
      >
        <h1 className='font-display text-3xl sm:text-5xl font-bold text-text-primary m-auto w-full sm:w-8/12 px-4'>
          Our Websites Might Make Your Business Too Successful!
        </h1>
        <p className='text-text-secondary text-center text-lg sm:text-2xl mt-8 m-auto w-full sm:w-9/12 px-4'>
          Handle with care obtaining the website development and maintenance
          service that will lead you wherever you want!
        </p>
        <div className='mt-6'>
          <Calender_Modal />
        </div>
      </Reveal>
    </div>
  );
};

export default Banner1;
