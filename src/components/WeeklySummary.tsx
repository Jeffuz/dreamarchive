import { Telescope } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from '@/hooks/use-toast'
import { useState } from "react";

interface WeeklySummaryProps {
    userID: string;
}

export default function WeeklySummary({ userID }: WeeklySummaryProps) {
    const { toast } = useToast();
    const [summary, setSummary] = useState<string>("");
    const [themes, setThemes] = useState<string[]>([]);
    const [emotions, setEmotions] = useState<string[]>([]);
    const [symbols, setSymbols] = useState<string[]>([]);

    const handleCreateWeeklySummary = async () => {
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userID
            })
        }
        try {
            const baseUrl = window.location.origin;
            const response = await fetch(`${baseUrl}/api/dreams/summary`, settings);
            const user_data = await response.json();
            setSummary(user_data.summary);
            setThemes(user_data.themes || []);
            setEmotions(user_data.emotions || []);
            setSymbols(user_data.recurring_symbols || []);
            toast({
                title: "Summary Generated!",
                description: "Your weekly dream summary is ready.",
                variant: "default",
                className: "bg-[#030712] border border-gray-700 text-lime-400",
            });

        } catch (error) {
            console.log(error)
            toast({
                title: "Error",
                description: "Something went wrong while saving your dream.",
                variant: "destructive",
            });
        }
    }
    return (
        <div className="border border-gray-800 h-full rounded-xl p-4 flex flex-col gap-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="text-[#F3F4F6] font-semibold text-xl">
                    Dream Highlights of the Week
                </div>
                <Button
                    onClick={handleCreateWeeklySummary}
                    className="bg-lime-400 hover:bg-lime-500 text-[#030712] transition duration-200"
                >
                    <Telescope className="mr-2 h-4 w-4" />
                    Generate Summary
                </Button>
            </div>

            {/* Summary Section */}
            {summary && (
                <div className="flex flex-col gap-2">
                    <div className="text-white font-medium text-md">Summary</div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                        {summary}
                    </div>
                </div>
            )}

            {/* Themes */}
            {themes.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="text-white font-medium text-md">Themes</div>
                    <div className="flex flex-wrap gap-2">
                        {themes.map((theme, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center rounded-full bg-lime-400/10 px-2.5 py-1 text-xs font-medium text-lime-400 transition-colors hover:bg-lime-400/20"
                            >
                                {theme}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Emotions */}
            {emotions.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="text-white font-medium text-md">Emotions</div>
                    <div className="flex flex-wrap gap-2">
                        {emotions.map((emotion, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center rounded-full bg-lime-400/10 px-2.5 py-1 text-xs font-medium text-lime-400 transition-colors hover:bg-lime-400/20"
                            >
                                {emotion}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Recurring Symbols */}
            {symbols.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="text-white font-medium text-md">Recurring Symbols</div>
                    <div className="flex flex-wrap gap-2">
                        {symbols.map((symbol, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center rounded-full bg-lime-400/10 px-2.5 py-1 text-xs font-medium text-lime-400 transition-colors hover:bg-lime-400/20"
                            >
                                {symbol}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}