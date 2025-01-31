"use client"

import Navbar from "@/app/components/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import { Particles } from "@/components/ui/particles";
import HowItWorks from "./components/howItWorks";
import Problem from "./components/problem";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <main className="relative z-10  space-y-24">
        <Hero />
        <Problem />
        <div className="bg-[#111827]">
          <Showcase />
        </div>
        <HowItWorks />
      </main>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
    </div>
  );
}
