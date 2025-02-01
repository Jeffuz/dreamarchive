"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase';
import { Session } from "@supabase/supabase-js";

export default function Dashboard() {
    const [userData, setUserData] = useState<Session | null>(null);
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
        return <div>Test</div>
    }

    return (
        <div>

        </div>
    )
}
