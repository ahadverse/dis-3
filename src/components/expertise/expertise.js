import React from "react";
import Reveal from "../motion/Reveal";
import AnimatedCounter from "../motion/AnimatedCounter";

const Expertise = () => {
  return (
    <div className='mt-2'>
      <div className='max-w-[1200px] w-full mx-auto flex flex-col md:flex-row gap-4 md:gap-0 items-stretch md:justify-between'>
        <Reveal
          direction='right'
          className='w-full md:flex-[0_0_58%] h-auto md:h-[545px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-black border border-border p-4 flex flex-col justify-center'
        >
          <img src='/users1.png' className='w-24 md:w-32' />
          <p className='text-3xl md:text-4xl mt-6 md:mt-28 font-bold text-text-primary'>
            <AnimatedCounter value={50} suffix='+' />
          </p>
          <p className='text-base md:text-xl capitalize text-text-secondary'>
            Heads of Expertise
          </p>
          <p className='mt-4 max-w-md text-sm text-text-secondary'>
            Designers, front-end and back-end developers, SEO specialists, and
            project managers, organised into small focused teams rather than a
            single generalist handling everything. That's what lets us keep
            subscription pricing affordable without cutting corners on quality.
          </p>
        </Reveal>

        <Reveal
          direction='left'
          delay={0.1}
          className='w-full md:flex-[0_0_42%] h-auto md:h-[545px] rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl bg-gradient-primary p-4 flex flex-col justify-center'
        >
          <h2 className='mt-4 md:mt-5 text-xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <AnimatedCounter value={20} suffix='+' /> Remote Expertise
          </h2>
          <div className='mt-3'>
            <h1 className='text-lg md:text-3xl text-white/90'>
              Working All Over the globe
            </h1>
            <p className='mt-4 max-w-sm text-sm text-white/80'>
              A distributed team across time zones means design feedback,
              development work, and support requests get handled without waiting
              a full business day for a reply — and it lets us bring on the
              right specialist for a project instead of whoever's available
              locally.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Expertise;
