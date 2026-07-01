import React from "react";
import Reveal from "../motion/Reveal";
import AnimatedCounter from "../motion/AnimatedCounter";

const About_section = () => {
  return (
    <div className='mt-4'>
      <Reveal direction='up'>
        <h1 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-primary text-center font-bold'>
          Our Comprehensiveness Truely Reflects in Our Expertise
        </h1>
      </Reveal>

      <Reveal direction='up' delay={0.05}>
        <p className='mx-auto mt-6 max-w-3xl text-center text-base text-text-secondary'>
          Comprehensiveness means we don't just hand over a website and
          disappear. From the first discovery call through to the monthly
          maintenance that keeps a site secure and up to date, every client
          works with the same point of contact, not a rotating cast of
          freelancers.
        </p>
      </Reveal>

      <div className='max-w-[1200px] w-full mx-auto mt-6 flex flex-col md:flex-row gap-4 md:gap-0 items-stretch md:justify-between'>
        {/* TODO: Replace with verified, real business stats */}
        <Reveal
          direction='right'
          className='w-full md:w-[42%] h-auto md:h-[450px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-black border border-border bg-[url("/about2.png")] bg-center bg-cover p-6 flex flex-col justify-center'
        >
          <p className='text-2xl md:text-4xl font-extrabold text-text-primary'>
            <AnimatedCounter value={13} />
          </p>
          <p className='text-base md:text-xl capitalize text-text-secondary'>
            years in business
          </p>
        </Reveal>

        <Reveal
          direction='left'
          delay={0.1}
          className='w-full md:w-[58%] h-auto md:h-[450px] rounded-bl-3xl rounded-tr-3xl rounded-br-3xl bg-black border border-border p-4 md:px-5 flex flex-col justify-center'
        >
          <h2 className='mt-6 md:mt-10 text-xl md:text-3xl lg:text-5xl font-semibold text-text-primary'>
            <AnimatedCounter value={400} suffix='+' /> successfully developed
            websites
          </h2>
          <p className='mt-4 max-w-md text-base text-text-secondary'>
            Across e-commerce stores, service businesses, and content-driven
            brands, each project follows the same disciplined process —
            discovery, design, build, launch, and ongoing maintenance — so
            quality doesn't depend on which client happens to be next in the
            queue.
          </p>

          {/* TODO: Replace with real client testimonial */}
        </Reveal>
      </div>
    </div>
  );
};

export default About_section;
