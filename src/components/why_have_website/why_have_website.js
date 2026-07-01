import React from "react";
import style from "./style.module.css";
import Reveal from "../motion/Reveal";

const Why_have_website = () => {
  return (
    <div className='w-full lg:max-w-[1280px] m-auto my-10 pb-16 px-4'>
      <Reveal direction='up'>
        <h2 className='font-bold text-base sm:text-lg text-accent-blue-400'>
          Why Have a Website?
        </h2>
        <h3 className='w-full sm:w-8/12 mt-8 font-display font-semibold text-3xl sm:text-5xl text-text-primary'>
          Because It will land you where success takes flight!
        </h3>
      </Reveal>
      <div className='flex flex-col sm:flex-row gap-5 items-center sm:items-start my-10'>
        <div className='w-full sm:w-6/12 flex flex-col gap-5'>
          <Reveal
            direction='up'
            className='flex p-4 rounded-se-2xl shadow-card hover:shadow-cardHover bg-bg-surface2 rounded-b-2xl gap-2 border border-border-subtle items-center w-full sm:max-w-[400px] transition-shadow duration-300'
          >
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s1.png' />
            <h1 className='text-base sm:text-xl leading-relaxed text-text-primary'>
              Makes your business impossible to ignore.
            </h1>
          </Reveal>
          <Reveal
            direction='up'
            delay={0.05}
            className='flex p-4 sm:ml-auto rounded-se-2xl shadow-card hover:shadow-cardHover bg-bg-surface2 rounded-b-2xl gap-2 border border-border-subtle items-center w-full sm:max-w-[400px] transition-shadow duration-300'
          >
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s2.png' />
            <h1 className='text-base sm:text-xl leading-relaxed text-text-primary'>
              Create a pipeline that doesn&apos;t miss a single lead.
            </h1>
          </Reveal>
          <Reveal
            direction='up'
            delay={0.1}
            className='flex p-4  rounded-se-2xl shadow-card hover:shadow-cardHover bg-bg-surface2 rounded-b-2xl   gap-2  border border-border-subtle items-center w-full sm:max-w-[400px] transition-shadow duration-300'
          >
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s3.png' />
            <h1 className='text-base sm:text-xl leading-relaxed text-text-primary'>
              Makes you open for business, even when you&apos;re not.
            </h1>
          </Reveal>
          <Reveal
            direction='up'
            delay={0.15}
            className='flex p-4 sm:ml-auto rounded-se-2xl shadow-card hover:shadow-cardHover bg-bg-surface2 rounded-b-2xl  gap-2 border border-border-subtle items-center w-full sm:max-w-[400px] transition-shadow duration-300'
          >
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s4.png' />
            <h1 className='text-base sm:text-xl leading-relaxed text-text-primary'>
              Builds a competition that levels the playing field
            </h1>
          </Reveal>
        </div>
        <Reveal direction='up' className={style.container2}>
          <div className=''>
            {" "}
            <h2 className='text-lg sm:text-2xl font-semibold text-text-primary'>
              Makes Your Business Impossible to Ignore
            </h2>
            <p className='text-base sm:text-lg mt-6 text-text-secondary'>
              Our affordable website development packages come up with solution
              that reflects and keeps the audience scrolling.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Why_have_website;
