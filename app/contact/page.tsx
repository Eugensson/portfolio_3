import { Metadata } from "next";
import * as motion from "motion/react-client";

import ContactForm from "@/components/contact-form";

import { INFO_LIST } from "@/constants";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="container grid grid-cols-1 xl:grid-cols-[5fr_4fr] gap-8 xl:gap-12"
    >
      <div className="mb-8 xl:mb-0 order-2 xl:order-none">
        <ContactForm />
      </div>
      <ul className="flex flex-col justify-center gap-10 order-1 xl:order-none">
        {INFO_LIST.map(({ icon: Icon, title, description }, index) => (
          <li key={index} className="flex items-center gap-6">
            <div className="size-13 xl:size-18 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
              <Icon size={28} />
            </div>
            <div className="flex-1">
              <p className="text-white/60">{title}</p>
              <h3 className="xl:text-lg">{description}</h3>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Contact;
