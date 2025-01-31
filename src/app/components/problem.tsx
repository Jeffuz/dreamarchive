import React from 'react';
import { LucideMoon, BrainCircuit, Eye, ShieldCheck } from "lucide-react";

const Problem = () => {
    return (
        <section className="flex flex-col items-center py-12 px-6 space-y-8 mx-auto max-w-[980px] max-lg:px-6 text-[#F3F4F6]">
            <div className="text-3xl font-bold text-center">Why Choose Dream Archive?</div>
            <div className="text-center text-lg text-muted-foreground max-w-2xl">
                Dream Archive helps you track and analyze your dreams, uncover patterns, and gain deeper self-awareness through AI-powered insights.
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl">
                <div className="flex flex-col items-center text-center space-y-2">
                    <LucideMoon size={50} className="text-indigo-500" />
                    <div className="text-xl font-semibold">Remember Every Dream</div>
                    <div className="text-muted-foreground">
                        Log and organize your dreams effortlessly to uncover hidden meanings.
                    </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                    <BrainCircuit size={50} className="text-yellow-500" />
                    <div className="text-xl font-semibold">AI-Powered Insights</div>
                    <div className="text-muted-foreground">
                        Let AI detect recurring themes, emotions, and symbols in your dreams.
                    </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                    <Eye size={50} className="text-purple-500" />
                    <div className="text-xl font-semibold">Discover Hidden Messages</div>
                    <div className="text-muted-foreground">
                        Reveal subconscious thoughts through pattern recognition.
                    </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                    <ShieldCheck size={50} className="text-green-500" />
                    <div className="text-xl font-semibold">Secure & Private</div>
                    <div className="text-muted-foreground">
                        Your dreams are yours alone. We ensure complete confidentiality.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
