import Link from "next/link";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                variant: "default",
              }),
              "rounded-full"
            )}
          >
            Hire Me
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
