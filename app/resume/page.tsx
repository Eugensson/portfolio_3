import Image from "next/image";
import { Metadata } from "next";
import * as motion from "motion/react-client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ABOUT_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  SKILLS_DATA,
} from "@/constants";

export const metadata: Metadata = {
  title: "Resume",
};

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full container flex items-center justify-center py-12 xl:py-0"
    >
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col xl:flex-row gap-10"
      >
        <TabsList className="flex flex-col w-full max-w-75 mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        <div className="w-full h-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <div className="flex items-center gap-4">
                <Image
                  src={EXPERIENCE_DATA.icon}
                  alt="Experience icon"
                  width={40}
                  height={40}
                  priority
                  className="object-contain aspect-square"
                />
                <h3 className="text-4xl font-bold">{EXPERIENCE_DATA.title}</h3>
              </div>
              <p className="max-w-200 text-white/60 mx-auto xl:mx-0">
                {EXPERIENCE_DATA.description}
              </p>
              <ScrollArea className="h-80 pr-4">
                <ul className="grid lg:grid-cols-2 gap-4">
                  {EXPERIENCE_DATA.items.map(
                    ({ company, position, duration }, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{company}</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-5 text-center xl:text-left">
              <div className="flex items-center gap-4">
                <Image
                  src={EDUCATION_DATA.icon}
                  alt="Experience icon"
                  width={40}
                  height={40}
                  priority
                  className="object-contain aspect-square"
                />
                <h3 className="text-4xl font-bold">{EDUCATION_DATA.title}</h3>
              </div>
              <p className="max-w-200 text-white/60 mx-auto xl:mx-0">
                {EDUCATION_DATA.description}
              </p>
              <ScrollArea className="h-80 pr-4">
                <ul className="grid lg:grid-cols-2 gap-[30px]">
                  {EDUCATION_DATA.items.map(
                    ({ institution, degree, duration }, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{institution}</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{SKILLS_DATA.title}</h3>
                <p className="max-w-200 text-white/60 mx-auto xl:mx-0">
                  {SKILLS_DATA.description}
                </p>
              </div>
              <ScrollArea className="h-80 pr-4">
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4">
                  {SKILLS_DATA.skillList.map(({ icon: Icon, name }) => (
                    <li key={name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="group-hover:text-accent transition-all duration-300">
                              <Icon size={50} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-10">
              <h3 className="text-4xl font-bold">{ABOUT_DATA.title}</h3>
              <p className="max-w-200 text-white/60 mx-auto xl:mx-0">
                {ABOUT_DATA.description}
              </p>
              <ul className="grid xl:grid-cols-2 gap-15 max-w-200 mx-auto xl:mx-0">
                {ABOUT_DATA.info.map(({ fieldName, fieldValue }, index) => (
                  <li
                    key={index}
                    className="flex items-baseline-last justify-center xl:justify-start gap-2"
                  >
                    <span className="text-white/60">{fieldName}</span>
                    <span className="text-xl font-bold text-accent">
                      {fieldValue}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.section>
  );
};

export default Resume;
