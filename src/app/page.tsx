"use client"

import Navbar from "@/app/components/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import Problem from "./components/problem";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <main className="relative z-10  space-y-24">
        <Hero />
        <div className="bg-[#111827] py-20 relative">
          <Problem />
        </div>
        <Showcase />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
