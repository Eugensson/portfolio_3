import { Metadata } from "next";
import * as motion from "motion/react-client";

import { ProjectSlider } from "@/components/project-slider";

export const metadata: Metadata = {
  title: "Work",
};

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full container flex flex-col justify-center py-12 xl:py-0"
    >
      <ProjectSlider />
    </motion.section>
  );
};

export default Work;
