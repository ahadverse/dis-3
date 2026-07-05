import React from "react";
import Reveal from "../motion/Reveal";
import AnimatedCounter from "../motion/AnimatedCounter";

const Our_Distinctive_Edge2 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-6 mt-2 items-center max-w-[1200px] w-full mx-auto px-4 sm:px-6'>
      <Reveal
        direction='right'
        className='w-full md:flex-[0_0_58%] h-auto md:h-[545px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-bg-surface1 border border-border p-4'
      >
        <h1 className='text-2xl md:text-4xl text-accent-blue-400 font-bold'>
          <AnimatedCounter value={20} suffix='+' /> Industries Served
        </h1>

        <div className='grid grid-cols-2 gap-3 mt-4'>
          <div className='px-4 py-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-accent-blue-600 justify-center items-center flex'>
            <img className='w-20 md:w-48 py-4' src='/1.png' />
          </div>
          <div className='px-3 py-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-bg-surface4 justify-center items-center flex'>
            <img className='w-20 md:w-48' src='/2.png' />
          </div>
          <div className='px-4 py-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-accent-blue-600 justify-center items-center flex'>
            <img className='w-20 md:w-48' src='/3.png' />
          </div>
          <div className='px-3 py-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-bg-surface4 justify-center items-center flex'>
            <img className='w-20 md:w-48' src='/4.png' />
          </div>
        </div>
        <p className='mt-4 text-sm text-text-secondary'>
          From local trades and clinics to e-commerce brands and SaaS startups,
          our team has shipped sites across more than twenty industries. That
          breadth matters: a checkout flow that converts well for an online
          store and a booking flow that works for a service business need
          different thinking, and we've built both more times than we can count.
        </p>
      </Reveal>

      <Reveal
        direction='left'
        delay={0.1}
        className='w-full md:flex-[0_0_42%] h-auto md:h-[545px] rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl bg-bg-surface1 border border-border p-4 flex flex-col justify-center'
      >
        <p className='text-3xl md:text-5xl font-extrabold text-text-primary'>
          <AnimatedCounter value={270} suffix='+' />
        </p>
        <p className='text-lg md:text-2xl capitalize text-text-secondary'>
          Happy Clientbase
        </p>
        <p className='mt-4 text-sm text-text-secondary'>
          Most of our new business comes from referrals and renewed
          subscriptions rather than cold outreach — which only happens when
          clients are actually satisfied with the result, month after month.
        </p>
      </Reveal>
    </div>
  );
};

export default Our_Distinctive_Edge2;
