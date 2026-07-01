import React from "react";
import Reveal from "../motion/Reveal";

const Mission = () => {
  return (
    <div className='rounded-2xl border border-border-subtle bg-bg-surface1 py-8 px-4 sm:px-6 md:px-12'>
      <div className='max-w-[1200px] w-full mx-auto flex flex-col md:flex-row gap-8'>
        <Reveal direction='right' className='md:w-1/2'>
          <h2 className='font-display text-2xl md:text-4xl font-bold text-text-primary'>
            What Drives Our Future and Guides Our Actions?
          </h2>
        </Reveal>

        <Reveal direction='left' delay={0.1} className='md:w-1/2'>
          <h1 className='text-xl md:text-2xl font-bold text-accent-blue-400'>
            Mission
          </h1>
          <p className='text-base md:text-lg mt-2 text-text-secondary'>
            To make agency-quality web design affordable and sustainable for
            every business — through a single subscription that covers design,
            development, and ongoing maintenance, so our clients focus on
            running their business, not babysitting their website.
          </p>

          <h3 className='text-xl md:text-2xl font-bold mt-6 text-accent-blue-400'>
            Vision
          </h3>
          <p className='text-base md:text-lg mt-2 text-text-secondary'>
            To be the long-term digital partner for every business we work
            with — building websites that stay fast, secure, and effective
            long after launch day, so our clients always compete above their
            weight class online.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Mission;
