"use client"

import Navbar from "@/app/components/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import Problem from "./components/problem";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";

export default function Home() {
  const [userData, setUserData] = useState<Session | null>(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        setUserData(data.session);
      } catch (error) {
        console.log(error);
      }
    }

    getUserData();
  }, [])

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar session={userData} />
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
