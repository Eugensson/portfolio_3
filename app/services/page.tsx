import Link from "next/link";
import { Metadata } from "next";
import * as motion from "motion/react-client";
import { BsArrowDownRight } from "react-icons/bs";

import { SERVICE_LIST } from "@/constants";

export const metadata: Metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <section className="h-full flex flex-col justify-center py-12 xl:py-0">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="container grid md:grid-cols-2 gap-15"
      >
        {SERVICE_LIST.map(({ num, title, description, href }, index) => (
          <li
            key={index}
            className="group flex-1 flex flex-col justify-center gap-6 w-full border-b border-white/20"
          >
            <div className="w-full flex justify-between items-center">
              <p className="text-5xl font-extrabold text-outline transition-all duration-500">
                {num}
              </p>
              <Link
                href={href}
                className="flex justify-center items-center size-17.5 rounded-full bg-white group-hover:bg-accent hover:-rotate-45 transition-all duration-500"
              >
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            <h2 className="h2 font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
              {title}
            </h2>
            <p className="text-white/60">{description}</p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Services;
