import { FiDownload } from "react-icons/fi";

import { Stats } from "@/components/stats";
import { Social } from "@/components/social";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-5">
              Helo!&nbsp;I&apos;m
              <br />
              <span className="text-accent">Luke Coleman</span>
            </h1>
            <p className="max-w-140 mb-5 text-sm xl:text-base text-white/80">
              I create clean and elegant digital experiences and know a variety
              of programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                type="button"
                className="flex items-center gap-4 uppercase rounded-full cursor-pointer"
              >
                Download CV
                <FiDownload className="w-6 h-6" />
              </Button>
              <Social
                containerStyles="flex gap-6"
                iconStyles="flex items-center justify-center rounded-full size-9 border border-accent text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Avatar />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
