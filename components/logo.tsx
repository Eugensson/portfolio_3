import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="text-4xl font-semibold">
      Luke<span className="text-accent">.</span>
    </Link>
  );
};
