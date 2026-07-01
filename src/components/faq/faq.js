import React from "react";
import AccordianFa from "../accordian/accordian";
import Reveal from "../motion/Reveal";

const FAQs = () => {
  return (
    <div className='w-11/12 max-w-[1280px] m-auto px-4 mb-16 sm:mb-24'>
      {" "}
      <Reveal direction='up'>
        <p className='font-display text-text-primary text-display-md sm:text-display-lg mt-10 font-bold capitalize text-center'>
          Frequently Asked Questions
        </p>
      </Reveal>
      <Reveal direction='up' delay={0.1}>
        <p className='text-text-secondary font-semibold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'>
          Hover through the questions that arise in your mind frequently before
          taking the benefit of our unmatched service.
        </p>
      </Reveal>{" "}
      <div>
        <AccordianFa />
      </div>
    </div>
  );
};

export default FAQs;
