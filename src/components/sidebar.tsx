import Link from "next/link";
import { Bell, Moon, BarChart2, Calendar, Settings, Book, Clock, Trees } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Particles } from "@/components/ui/particles";
import { useEffect, useState } from "react";


const menuItems = [
    { icon: Moon, label: "Dreams", href: "/dashboard" },
    { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Calendar, label: "Calendar", href: "/dashboard/calendar" },
    { icon: Book, label: "Dream Journal", href: "/dashboard/journal" },
    { icon: Clock, label: "Sleep Patterns", href: "/dashboard/sleep" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
    const user = { username: "John Doe", email: "johndoe@gmail.com" };
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentTime])

    return (
        // Adjust Gradient
        <div className="h-screen w-64 bg-gradient-to-b from-[#030712] to-[#030712] text-[#F3F4F6] fixed inset-y-0 left-0">
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
                <Link href="/" className="flex items-center gap-2 px-4">
                    <Trees className="h-6 w-6 text-lime-400" />
                    <span className="font-bold text-xl text-[#F3F4F6]">Dream Archive</span>
                </Link>
            </div>

            {/* Profile Section */}
            <div className="px-4 py-6">
                <div className="flex items-center px-4">
                    {/* Avatar */}
                    <Avatar className="w-10 h-10 mr-3">
                        <AvatarImage src="https://www.gravatar.com/avatar/?d=mp" />
                        <AvatarFallback>{user?.username.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div>
                        <div className="font-medium">{user.username}</div>
                        <div className="text-sm text-gray-400">{user.email}</div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="px-4">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="flex items-center px-4 py-2 text-[#F3F4F6] hover:bg-[#27272A] transition duration-200 rounded-lg mb-2"
                    >
                        <item.icon className="mr-3 h-5 w-5 text-lime-400" />
                        <div>{item.label}</div>
                    </Link>
                ))}
            </div>

            {/* Notifications */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
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
        </div>
    );
}
