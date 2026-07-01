import React from "react";
import style from "./style.module.css";
import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../motion/Reveal";

const About_section = () => {
  return (
    <div className={style.main}>
      <Reveal direction='right' className={style.container1}>
        <p className='text-4xl font-display font-bold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]'> 400+</p>
        <p className='text-xl capitalize text-white/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]'>successful projects</p>
      </Reveal>
      <Reveal direction='left' className={style.container2}>
        <h1 className='text-lg sm:text-xl font-semibold text-accent-blue-400'>ABOUT US</h1>
        <h2 className='mt-10 text-3xl sm:text-5xl font-display font-semibold text-text-primary'>
          We Commit to Your Constant Excellence
        </h2>
        <div className='mt-10'>
          <li className='list-none mt-5 flex items-start  gap-3'>
            <CheckCircle2 className='text-accent-blue-400  w-6 sm:w-8 text-lg sm:text-xl mt-2 flex-shrink-0' />
            <p className='text-base sm:text-xl text-text-secondary'>
              Get a mind-blowing website without emptying your wallet.
            </p>
          </li>
          <li className='list-none mt-5 flex items-start gap-3'>
            <CheckCircle2 className='text-accent-blue-400  w-6 sm:w-8 text-lg sm:text-xl mt-2 flex-shrink-0' />
            <p className='text-base sm:text-xl text-text-secondary'>
              We&apos;re your website&apos;s personal trainer, keeping it in top
              with dedicated support..
            </p>
          </li>
          <li className='list-none mt-5 flex items-start gap-3'>
            <CheckCircle2 className='text-accent-blue-400   w-6 sm:w-8 text-lg sm:text-xl mt-2 flex-shrink-0' />
            <p className='text-base sm:text-xl text-text-secondary'>
              Your site will load faster than a cheetah chasing a laser pointer.
            </p>
          </li>
        </div>
        <br />
        <br />
        <br />

        <Button pill size='lg' className='mb-5'>
          Discover More
        </Button>
      </Reveal>
    </div>
  );
};

export default About_section;
