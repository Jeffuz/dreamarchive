import Link from "next/link";
import {
    Moon, BarChart2, Calendar, Settings, Book,
    // Clock, 
    Trees
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Particles } from "@/components/ui/particles";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress"
import { Session } from "@supabase/supabase-js";

interface sidebarProps {
    currentPage: string,
    onCurrentPage: (currentPage: string) => void,
    userData: Session | null,
}

const menuItems = [
    { icon: Moon, label: "Dreams" },
    { icon: Book, label: "Journal" },
    { icon: Calendar, label: "Calendar" },
    { icon: BarChart2, label: "Analytics" },
    // { icon: Clock, label: "Sleep Patterns"},
    { icon: Settings, label: "Settings" },
];

export function Sidebar({ currentPage, onCurrentPage, userData }: sidebarProps) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentTime])

    const dreamStreak = 5; // use as state later
    const streakProgress = (dreamStreak / 7) * 100

    return (
        // Adjust Gradient
        <div className="h-screen w-64 bg-gradient-to-b from-[#030712] to-[#030712] text-[#F3F4F6] flex flex-col justify-between border-r border-gray-500">
            <div>
                {/* Header */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
                    <Link href="/" className="flex items-center gap-2 px-4">
                        <Trees className="h-6 w-6 text-lime-400" />
                        <span className="font-bold text-xl text-[#F3F4F6] whitespace-nowrap flex items-center">Dream Archive</span>
                    </Link>
                </div>

                {/* Profile Section */}
                <div className="px-4 py-6">
                    <div className="flex items-center px-4">
                        {/* Avatar */}
                        <Avatar className="w-10 h-10 mr-3">
                            <AvatarImage src="https://www.gravatar.com/avatar/?d=mp" />
                            <AvatarFallback>{userData?.user?.user_metadata?.username.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div>
                            <div className="font-medium">{userData?.user?.user_metadata?.username}</div>
                            <div className="text-sm text-gray-400">{userData?.user?.user_metadata?.email}</div>
                        </div>
                    </div>
                    {/* Streak */}
                    <div className="px-4 mt-4 space-y-2">
                        <div className="text-sm font-medium text-gray-400 mb-1">Dream Streak</div>
                        <Progress value={streakProgress} className="h-2 bg-[#27272A]" />
                        <div className="text-xs text-gray-400 mt-1">
                            {dreamStreak} days - {7 - dreamStreak} more for weekly summary!
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="px-4">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => onCurrentPage(item.label)}
                            className={`flex items-center px-4 py-2 text-[#F3F4F6] hover:bg-[#27272A] transition duration-200 rounded-lg mb-2 w-full ${currentPage === item.label ? 'bg-gray-700' : ""} `}
                        >
                            <item.icon className="mr-3 h-5 w-5 text-lime-400" />
                            <div>{item.label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Time */}
            <div className="w-full p-4 border-t border-gray-700">
                <div className="text-center rounded-lg space-y-1">
                    <div className="text-md font-semibold tracking-wide">{currentTime.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}</div>
                    <div className="text-sm text-gray-400 tracking-wide">{currentTime.toLocaleTimeString()}</div>
                </div>
            </div>
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={"#fff"}
                refresh
            />
        </div >
    );
}
