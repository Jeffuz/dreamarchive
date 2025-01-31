import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users } from "lucide-react"
import Safari from "@/components/ui/safari"

export default function Hero() {
    return (
        <section className="lg:py-28">
            <div className="mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    Decode your dreams with AI-powered insights
                </h1>
                <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-[750px]">
                    Meet the dream journaling platform built to uncover the hidden meanings in your subconscious. By leading dream
                    researchers and AI experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-gray-900">
                        <Link href="/signup">
                            Get started now
                            <span className="ml-2">→</span>
                        </Link>
                    </Button>
                </div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>10k+ dreamers already on board</span>
                    </div>
                </div>
                <Safari url="dreamarchive.com" className="size-full" imageSrc="https://via.placeholder.com/1200x750" />
            </div>
        </section>
    )
}

