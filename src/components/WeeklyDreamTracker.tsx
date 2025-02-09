import React from "react";
import { cn } from "@/lib/utils";

interface WeeklyDreamTrackerProps {
    dreamData: { created_at: string }[];
}

const WeeklyDreamTracker = ({ dreamData }: WeeklyDreamTrackerProps) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todayIndex = new Date().getDay();

    const recordedDays = new Set(
        dreamData.map((dream) => new Date(dream.created_at).getDay())
    );

    const loggedDaysCount = recordedDays.size;
    const totalDays = 7;
    const ratio = `${loggedDaysCount} / ${totalDays} Days Logged`;

    return (
        <div className="w-full overflow-x-auto p-5 rounded-xl bg-[#030712]/50 border border-gray-800 space-y-5">
            {/* Title + Ratio */}
            <div className="flex justify-between items-center">
                <div className="text-[#F3F4F6] font-semibold text-xl">
                    Weekly Dream Tracker
                </div>
                <div className="text-sm text-muted-foreground">{ratio}</div>
            </div>

            {/* Days*/}
            <div className="flex justify-between">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="relative">
                        <div
                            className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-lg border border-gray-800 text-white text-sm font-medium",
                                recordedDays.has(index)
                                    ? "bg-lime-400 text-[#030712]"
                                    : "bg-[#1a1a1a] text-gray-500"
                            )}
                        >
                            {day}
                        </div>
                        {/* Today indicator */}
                        {index === todayIndex && (
                            <span className="absolute top-0 right-0 flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-white/90"></span>
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeeklyDreamTracker
