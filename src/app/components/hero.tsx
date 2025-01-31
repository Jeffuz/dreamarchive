import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users } from "lucide-react"
import Safari from "@/components/ui/safari"
import { TextAnimate } from "@/components/ui/text-animate"
import { BlurFade } from "@/components/ui/blur-fade"

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
                            <Link href="/signup">
                                Get started now
                                <span className="ml-2">→</span>
                            </Link>
                        </Button>
                    </BlurFade>

                </div>
                <div className="flex items-center gap-4 mb-8">
                    <BlurFade delay={0.25} direction="up" inView>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Users className="h-4 w-4" />
                            <span>10k+ dreamers already on board</span>
                        </div>
                    </BlurFade>
                </div>
                <Safari url="dreamarchive.com" className="size-full" />
            </div>
        </section>
    )
}

