"use client";

import { JSX, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase';
import { Session } from "@supabase/supabase-js";
import { Sidebar } from "@/components/sidebar";
import Dreams from "./components/dreams";
import Journal from "./components/journal";
import Analytics from "./components/analytics";
import Calendar from "./components/calendar";
import Settings from "./components/settings";

const pageComponents: { [key: string]: JSX.Element } = {
    "Dreams": <Dreams />,
    "Journal": <Journal />,
    "Analytics": <Analytics />,
    "Calendar": <Calendar />,
    "Settings": <Settings />
}

export default function Dashboard() {
    const [userData, setUserData] = useState<Session | null>(null);
    const [currentPage, setCurrentPage] = useState("Dreams");

    const router = useRouter();

    useEffect(() => {
        const getSession = async () => {
            const { data, error } = await supabase.auth.getSession()
            if (error) throw Error;
            if (!data.session) {
                router.push("/auth/login");
            } else {
                setUserData(data.session)
            }
        }

        getSession()
    }, [router]);

    console.log(userData)

    // Anti flickering
    if (!userData) {
        return <div className="bg-[#030712]"></div>
    }

    return (
        <div className="flex">
            <Sidebar currentPage={currentPage} onCurrentPage={setCurrentPage} />
            <main className="bg-[#030712] h-screen w-full z-10">
                {pageComponents[currentPage]}
            </main>
        </div>
    )
}
