"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase';
import { Session } from "@supabase/supabase-js";
import { Sidebar } from "@/components/sidebar";
import Dreams from "./components/dreams";
import Journal from "./components/journal";
import Analytics from "./components/analytics";
import Calendar from "./components/calendar";
import Settings from "./components/settings";

const PageComponents: { [key: string]: React.ComponentType<{ userData: Session | null }> } = {
    "Dreams": Dreams,
    "Journal": Journal,
    "Analytics": Analytics,
    "Calendar": Calendar,
    "Settings": Settings,
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

    // Anti flickering
    if (!userData) {
        return <div className="bg-[#030712]"></div>
    }

    const SelectedPage = PageComponents[currentPage];

    return (
        <div className="flex">
            <Sidebar currentPage={currentPage} onCurrentPage={setCurrentPage} userData={userData} />
            <main className="bg-[#030712] w-full overflow-x-hidden z-10">
                <SelectedPage userData={userData} />
            </main>
        </div>
    )
}
