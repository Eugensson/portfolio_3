"use client";

import CountUp from "react-countup";

import { cn } from "@/lib/utils";
import { STAT_LIST } from "@/constants";

export const Stats = () => {
  return (
    <section className="pt-4 pb-8 xl:py-0">
      <ul className="container flex flex-wrap gap-5">
        {STAT_LIST.map(({ num, text }, index) => (
          <li
            key={index}
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
          >
            <CountUp
              end={num}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p
              className={cn(
                "leading-snug text-white/80",
                text.length < 15 ? "max-w-25" : "max-w-37.5"
              )}
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
