import React from "react";
import { Navigation, Code2, MessagesSquare, Rocket } from "lucide-react";
import style from "./style.module.css";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const STEPS = [
  { icon: Navigation, label: "Discovery Session" },
  { icon: Code2, label: "Design & Development" },
  { icon: MessagesSquare, label: "Client Review & Feedback" },
  { icon: Rocket, label: "Launch & Maintenance" },
];

const Work_flow = () => {
  return (
    <div className='w-11/12 max-w-[1280px] m-auto px-4'>
      {" "}
      <Reveal direction='up'>
        <p className='font-display text-text-primary text-display-md sm:text-display-lg mt-10 font-bold capitalize text-center'>
          Our Workflow
        </p>
      </Reveal>
      <Reveal direction='up' delay={0.1}>
        <p className='text-text-secondary font-semibold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'>
          From initial consultation to final launch, we work hand-in-hand with you
          to ensure that every detail is perfect.
        </p>
      </Reveal>{" "}
      <StaggerGrid className='my-20 flex flex-col sm:flex-row items-center gap-6'>
        {STEPS.map(({ icon: Icon, label }) => (
          <StaggerItem className='w-full sm:w-3/12' key={label}>
            <div className={style.container}>
              <Icon className={style.icon} size={32} />{" "}
              <div className={style.container__star}>
                <div className={style.stareight}></div>
              </div>
            </div>
            <h2 className='text-lg sm:text-2xl mt-16 font-semibold text-center text-text-primary'>
              {label}
            </h2>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
};

export default Work_flow;
