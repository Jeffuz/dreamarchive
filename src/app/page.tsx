"use client"

import Navbar from "@/app/components/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "@/components/ui/particles";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative z-10 mx-auto max-w-[980px] max-lg:px-6">
        <Hero />
        <Showcase />
      </main>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
