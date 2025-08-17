"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";

interface NavProps {
  setIsOpen?: () => void;
  className?: string;
}

export const Nav = ({ setIsOpen, className }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={cn("flex gap-8", className)}>
        {NAV_LINKS.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={cn(
                "capitalize font-medium hover:text-accent transition-all",
                pathname === path && "text-accent border-b-2 border-accent"
              )}
              onClick={() => setIsOpen?.()}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
