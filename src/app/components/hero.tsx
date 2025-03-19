import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users } from "lucide-react"
import Safari from "@/components/ui/safari"
import { TextAnimate } from "@/components/ui/text-animate"
import { BlurFade } from "@/components/ui/blur-fade"
import { AvatarCircles } from "@/components/ui/avatar-circles"
import { Particles } from "@/components/ui/particles";
import { NumberTicker } from "@/components/ui/number-ticker"


const avatars = [
    {
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    },
];

export default function Hero() {
    return (
        <section className="pt-28 mx-auto max-w-[980px] max-lg:px-6">
            <div className="mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#F3F4F6]">
                    <TextAnimate animation="slideUp" by="word">
                        Decode your dreams with AI-powered insights
                    </TextAnimate>
                </h1>
                <div className="text-lg lg:text-xl text-gray-400 mb-8 max-w-[750px]">
                    <TextAnimate animation="slideUp" by="word">
                        Meet the dream journaling platform built to uncover the hidden meanings in your subconscious. By leading dream
                        researchers and AI experts.
                    </TextAnimate>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <BlurFade delay={0.25} direction="up" inView>
                        <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-gray-900 shadow-lg">
                            <Link href="#contact">
                                Join the Waitlist
                                <span className="ml-2">→</span>
                            </Link>
                        </Button>
                    </BlurFade>

                </div>
                <div className="flex items-center gap-4 mb-8">
                    <BlurFade delay={0.25} direction="up" inView>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <AvatarCircles numPeople={99} avatarUrls={avatars} />
                            <Users className="h-4 w-4 ml-2" />
                            <span> <NumberTicker
                                value={100}
                                className="text-gray-400 tracking-tighter"
                            />+ dreamers already on board</span>
                        </div>
                    </BlurFade>
                </div>
                <Safari
                    url="dreamarchive.com"
                    imageSrc="/DreamArchive.png"
                    className="size-full"
                />
            </div>
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={"#fff"}
                refresh
            />
        </section>
    )
}

