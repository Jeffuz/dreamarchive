import React from 'react';
import { LucideMoon, BrainCircuit, Eye, ShieldCheck } from "lucide-react";
import { TextAnimate } from '@/components/ui/text-animate';
import { BlurFade } from '@/components/ui/blur-fade';

const Problem = () => {
    return (
        <section className="flex flex-col items-center py-12 px-6 space-y-8 mx-auto max-w-[980px] max-lg:px-6 text-[#F3F4F6]">

            <div className="text-4xl font-bold text-center ">
                <TextAnimate animation="slideUp" by="word">
                    Why Choose Dream Archive?
                </TextAnimate>
            </div>
            <div className="text-center text-lg text-muted-foreground max-w-2xl">
                <BlurFade delay={0.25} direction="up" inView>
                    Dream Archive helps you track and analyze your dreams, uncover patterns, and gain deeper self-awareness through AI-powered insights.
                </BlurFade>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl">
                <BlurFade delay={0.40} direction="up" inView>
                    <div className="flex flex-col items-center text-center space-y-2">
                        <LucideMoon size={50} className="text-lime-400" />
                        <div className="text-xl font-semibold">Remember Every Dream</div>
                        <div className="text-muted-foreground">
                            Log and organize your dreams effortlessly to uncover hidden meanings.
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.55} direction="up" inView>
                    <div className="flex flex-col items-center text-center space-y-2">
                        <BrainCircuit size={50} className="text-lime-400" />
                        <div className="text-xl font-semibold">AI-Powered Insights</div>
                        <div className="text-muted-foreground">
                            Let AI detect recurring themes, emotions, and symbols in your dreams.
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.70} direction="up" inView>
                    <div className="flex flex-col items-center text-center space-y-2">
                        <Eye size={50} className="text-lime-400" />
                        <div className="text-xl font-semibold">Discover Hidden Messages</div>
                        <div className="text-muted-foreground">
                            Reveal subconscious thoughts through pattern recognition.
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.85} direction="up" inView>
                    <div className="flex flex-col items-center text-center space-y-2">
                        <ShieldCheck size={50} className="text-lime-400" />
                        <div className="text-xl font-semibold">Secure & Private</div>
                        <div className="text-muted-foreground">
                            Your dreams are yours alone. We ensure complete confidentiality.
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};

export default Problem;
