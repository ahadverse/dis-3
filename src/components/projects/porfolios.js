"use client";

import React from "react";
import { portfolioPageProjects } from "../../lib/data/portfolio";
import Card from "../ui/Card";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const Projects = () => {
  return (
    <div className='px-4'>
      <StaggerGrid amount='some' className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full max-w-[1070px] m-auto'>
        {portfolioPageProjects.map((project, index) => (
          <StaggerItem className='w-full' key={`${project.title}-${index}`}>
            <Card className='overflow-hidden p-0'>
              <div className='overflow-hidden'>
                <img
                  className='w-full h-auto aspect-[550/380] object-cover object-center transition-transform duration-500 ease-out hover:scale-105'
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='text-xl sm:text-2xl font-bold text-text-primary text-center font-display'>
                  {project.title}
                </h3>
                <p className='mt-1 text-sm sm:text-md font-semibold text-accent-blue-400 text-center'>
                  {project.category}
                </p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
};

export default Projects;
