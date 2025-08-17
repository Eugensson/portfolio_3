"use client";

import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries size={32} className="text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation
          </SheetDescription>
        </SheetHeader>
        <div className="my-22 mx-auto">
          <Logo />
        </div>
        <Nav
          setIsOpen={() => setIsOpen(false)}
          className="flex-col justify-center items-center text-xl"
        />
      </SheetContent>
    </Sheet>
  );
};
