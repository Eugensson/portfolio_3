"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SliderButtons } from "@/components/slider-buttons";

import { PROJECT_LIST } from "@/constants";
import Link from "next/link";

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

export const ProjectSlider = () => {
  const [project, setProject] = useState<Project>(PROJECT_LIST[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(PROJECT_LIST[currentIndex]);
  };

  return (
    <div className="flex flex-col xl:flex-row xl:gap-7.5">
      <div className="w-full xl:w-1/2 xl:h-130 flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-7.5 h-1/2">
          <p className="text-8xl font-extrabold leading-none text-transparent text-outline">
            {project.num}
          </p>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category} project
          </h2>
          <p className="text-white/60 max-w-120">{project.description}</p>
          <ul className="flex flex-wrap items-center gap-4">
            {project.stack.map(({ name }, index) => (
              <li key={index} className="text-xl text-accent">
                {name}
                {index !== project.stack.length - 1 && ","}
              </li>
            ))}
          </ul>
          <div className="border border-white/20"></div>
          <div className="flex items-center gap-4">
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="size-17.5 rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                    <BsArrowUpRight
                      size={30}
                      className="text-white group-hover:text-accent transition-all duration-500"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="size-17.5 rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                    <BsGithub
                      size={30}
                      className="text-white group-hover:text-accent transition-all duration-500"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-130 mb-5"
          onSlideChange={handleSlideChange}
        >
          {PROJECT_LIST.map((_, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="h-70 sm:h-115 relative group flex justify-center items-center">
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                <div className="relative w-full h-full">
                  <Image
                    src={PROJECT_LIST[index].image}
                    fill
                    className="object-contain"
                    alt={`${PROJECT_LIST[index].title} project image`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SliderButtons
            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full xl:w-max justify-between xl:justify-none"
            buttonStyles="size-11 flex justify-center items-center bg-accent hover:bg-accent-hover text-primary transition-all cursor-pointer"
            iconStyles=""
          />
        </Swiper>
      </div>
    </div>
  );
};
