import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { Header } from "@/components/header";
import { PageTransition } from "@/components/page-transition";

import "./globals.css";
import { StairTransition } from "@/components/stair-transition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: {
    default: "Luke Connor's portfolio",
    template: "%s - Luke Connor's portfolio",
  },
  description:
    "Explore Luke Connor's portfolio showcasing modern web development, creative design, and innovative digital solutions. Discover projects, skills, and experience in building high-quality applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased overflow-hidden`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
