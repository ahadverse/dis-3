import React from "react";
import style from "./style.module.css";
import Reveal from "../motion/Reveal";

const Our_Distinctive_Edge = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-between gap-3 sm:gap-6 mt-5 items-center mb-20  w-11/12 m-auto px-4'>
      <Reveal direction='right' className={style.container1}>
        <h1 className='font-display text-3xl sm:text-5xl font-bold text-text-primary'>
          Our Distinctive Edge
        </h1>
        <br />
        <div className='flex gap-3 justify-around flex-wrap'>
          <div className={style.imageContainer}>
            <img className='w-20 sm:w-[120px]' src='/1.png' />
          </div>
          <div className={style.imageContainer2}>
            <img className='w-24 sm:w-[200px]' src='/2.png' />
          </div>
          <div className={style.imageContainer}>
            <img className='w-20 sm:w-[130px]' src='/3.png' />
          </div>
          <div className={style.imageContainer2}>
            <img className='w-24 sm:w-[150px]' src='/4.png' />
          </div>
        </div>
      </Reveal>
      <Reveal direction='left' className={style.container2}>
        <img className='w-full max-w-[300px] sm:max-w-full rounded-lg' src='/team.webp' />
        <p className='font-display text-4xl sm:text-5xl mt-20 font-bold text-text-primary'> 50+</p>
        <p className='text-lg sm:text-2xl capitalize text-text-secondary'>team members</p>
      </Reveal>
    </div>
  );
};

export default Our_Distinctive_Edge;
