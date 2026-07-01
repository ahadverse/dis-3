"use client";

import React from "react";
import classes from "./projects.module.css";
import { portfolioProjects } from "../../lib/data/portfolio";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const Projects = () => {
  return (
    <div className='px-4 py-20'>
      <Reveal direction='up'>
        <p className='font-display text-text-primary text-display-md sm:text-display-lg mt-10 font-bold capitalize text-center'>
          Our Projects
        </p>
      </Reveal>
      <Reveal direction='up' delay={0.1}>
        <p className='text-text-secondary font-semibold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'>
          Our projects exemplify our dedication to converting ideas into
          professional, high-quality websites.
        </p>
      </Reveal>
      <StaggerGrid className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 w-full max-w-[1070px] m-auto mt-12'>
        {portfolioProjects.map((project, index) => (
          <StaggerItem
            className='w-full bg-black'
            key={`${project.title}-${index}`}
          >
            <img className={classes[project.imageClass]} src={project.image} />
            <h1 className='text-xl sm:text-2xl mt-2 font-bold text-text-primary text-center'>
              {project.title}
            </h1>
            <p className='text-sm sm:text-md font-bold text-accent-blue-400 text-center'>
              {project.category}
            </p>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
};

export default Projects;
