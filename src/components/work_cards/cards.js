"use client";
import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";

const CARDS = [
  {
    label: "Development & Maintenance",
    icon: "/work-image/image1.png",
    iconAlt: "startup icon",
    title: "Startup Website",
    desc: "Provides emerging businesses with a customized, scalable, and secure website designed to reflect their brand and support your growth.",
  },
  {
    label: "Development & Maintenance",
    icon: "/work-image/image2.png",
    iconAlt: "business icon",
    title: "Business Website",
    desc: "Designed for large businesses to enhance their online presence, ensuring their website is optimized for user experience, search engine visibility and mobile compatibility.",
  },
  {
    label: "Development & Maintenance",
    icon: "/work-image/image3.png",
    iconAlt: "ecommerce icon",
    title: "E-Commerce Website",
    desc: "Delivers a seamless, secure, and scalable experience, equipped with advanced features like inventory management, integrated payment solutions, and user-friendly navigation.",
  },
];

const Cards = () => {
  return (
    <StaggerGrid className='flex flex-wrap mt-14 justify-center items-stretch gap-6 m-auto w-full px-4'>
      {CARDS.map((card) => (
        <StaggerItem key={card.title} className='w-full sm:w-[380px]'>
          <Card className='group flex h-full w-full flex-col px-5 py-12'>
            <div className='flex justify-between items-center mb-2'>
              <p className='font-semibold text-xs text-text-muted'>{card.label}</p>
              <img
                alt={card.iconAlt}
                className='animate-pulse w-8 h-8'
                src={card.icon}
              />
            </div>
            <div className='my-6 flex-1'>
              <p className='text-3xl text-text-primary font-semibold'>
                {card.title}
              </p>
              <p className='mt-5 text-sm sm:text-base text-text-secondary'>
                {card.desc}
              </p>
            </div>
            <Button pill size='lg' className='mt-auto w-full'>
              Learn More
            </Button>
          </Card>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
};

export default Cards;
