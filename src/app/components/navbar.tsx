import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trees } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";

import {
    Menubar,
    // MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    // MenubarRadioGroup,
    // MenubarRadioItem,
    MenubarSeparator,
    // MenubarShortcut,
    // MenubarSub,
    // MenubarSubContent,
    // MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"


export default function Component() {

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

        const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
            setUserData(session);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [])

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw Error;
    }

    const user = userData?.user.user_metadata;

    return (
        <header className="sticky top-0 z-50 w-full border-b max-lg:px-6 bg-[#030712] border-gray-400">
            <div className="container mx-auto flex h-16 max-w-[980px] items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Trees className="h-6 w-6 text-lime-400" />
                    <span className="font-bold text-xl text-[#F3F4F6]">Dream Archive</span>
                </Link>
                {!userData ? <div className="flex items-center gap-4">
                    <Button size="sm" className="bg-[#030712] hover:bg-[#030712] hover:text-lime-400 transition duration-300" asChild>
                        <Link href="/auth/login">Log In</Link>
                    </Button>
                    <Button size="sm" className="bg-lime-400 hover:bg-lime-500 text-[#030712]" asChild>
                        <Link href="/auth/signup">Sign Up</Link>
                    </Button>
                </div> :
                    <Menubar className="flex items-center">
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Avatar className="w-8 h-8 hover:outline outline-lime-400 outline-2">
                                    <AvatarImage src="https://www.gravatar.com/avatar/?d=mp" />
                                    <AvatarFallback>{user?.username}</AvatarFallback>
                                </Avatar>
                            </MenubarTrigger>
                            <MenubarContent className="bg-[#030712] text-[#F3F4F6]">
                                <MenubarItem className="flex flex-col">
                                    <div>Signed in as</div>
                                    <div className="font-semibold text-lime-400">{user?.username}</div>
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem onClick={() => handleSignOut()} className="cursor-pointer hover:bg-[#27272A] transition duration-100">Sign Out</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>}
            </div>
        </header>
    )
}
