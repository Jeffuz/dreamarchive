import { Badge } from "@/components/ui/badge"
import { Brain, Moon, Sparkles } from "lucide-react"
import type React from "react"
import { IconCloud } from "@/components/ui/icon-cloud"

const dreamIcons = [
    "https://cdn-icons-png.flaticon.com/512/1163/1163624.png", // Crescent Moon (Dreams)
    "https://cdn-icons-png.flaticon.com/512/616/616554.png", // Cloud (Dreamlike State)
    "https://cdn-icons-png.flaticon.com/512/1828/1828970.png", // Stars (Mystical Dreams)
    "https://cdn-icons-png.flaticon.com/512/1077/1077114.png", // Eye (Vision, Lucid Dreaming)
    "https://cdn-icons-png.flaticon.com/512/1987/1987985.png", // Dreamcatcher (Symbol of Protection)
    "https://cdn-icons-png.flaticon.com/512/1046/1046841.png", // Brain (Memory & Thoughts)
    "https://cdn-icons-png.flaticon.com/512/1055/1055646.png", // Third Eye (Spiritual Awareness)
    "https://cdn-icons-png.flaticon.com/512/3455/3455007.png", // Portal (Entering Another World)
    "https://cdn-icons-png.flaticon.com/512/978/978953.png", // Feather (Lightness, Flying Dreams)
    "https://cdn-icons-png.flaticon.com/512/1177/1177568.png", // Key (Unlocking Subconscious)
    "https://cdn-icons-png.flaticon.com/512/868/868786.png", // Spiral (Endless Thoughts, Time Loop)
    "https://cdn-icons-png.flaticon.com/512/4905/4905912.png", // Masks (Hidden Meanings)
    "https://cdn-icons-png.flaticon.com/512/1783/1783615.png", // Galaxy (Cosmic, Infinite Possibilities)
    "https://cdn-icons-png.flaticon.com/512/1163/1163628.png", // Bed (Sleeping, Dreaming)
    "https://cdn-icons-png.flaticon.com/512/2942/2942737.png", // Melting Clock (Time Distortion in Dreams)
];


export default function Showcase() {

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[980px] max-lg:px-6 py-20">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Badge variant="outline" className="border-gray-800 border-2 text-gray-400">
                            AI-Powered Analysis
                        </Badge>
                        <h2 className="text-2xl font-bold text-[#F3F4F6]">Record and analyze your dreams</h2>
                        <p className="text-gray-400">
                            Our advanced AI helps you identify patterns, symbols, and recurring themes in your dreams.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Feature
                            icon={<Moon className="h-4 w-4" />}
                            title="Dream Journal"
                            description="Easily record your dreams with our intuitive interface"
                        />
                        <Feature
                            icon={<Brain className="h-4 w-4" />}
                            title="Theme Analysis"
                            description="Uncover hidden meanings and patterns in your dreams"
                        />
                        <Feature
                            icon={<Sparkles className="h-4 w-4" />}
                            title="AI Insights"
                            description="Get personalized interpretations and connections"
                        />
                        <Feature
                            icon={<Sparkles className="h-4 w-4" />}
                            title="AI Insights"
                            description="Get personalized interpretations and connections"
                        />
                    </div>
                </div>
                {/* Right hand Side */}
                <div className="flex items-center justify-center">
                    <IconCloud images={dreamIcons} />
                </div>
            </div>
        </section>
    )
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="mt-1 rounded-lg bg-gray-800 text-white p-2">{icon}</div>
            <div>
                <h3 className="font-medium mb-1 text-[#F3F4F6]">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    )
}

