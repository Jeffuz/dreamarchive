import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

const reviews = [
    {
        name: "Jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        rating: 5
    },
    {
        name: "Jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        rating: 4
    },
    {
        name: "John",
        body: "I'm at a loss for words. This is amazing. I love it.",
        rating: 5
    },
    {
        name: "Jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        rating: 4
    },
    {
        name: "Jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        rating: 5
    },
    {
        name: "James",
        body: "I'm at a loss for words. This is amazing. I love it.",
        rating: 4
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    body,
    rating,
}: {
    name: string;
    body: string;
    rating: number;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-600 p-4",
                "bg-[#111827]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                    <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                size={16}
                                className={`text-yellow-500 ${index < rating ? "fill-yellow-500" : "opacity-30"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-400">{body}</blockquote>
        </figure>
    );
};

export function Testimonials() {
    return (
        <section className="relative flex flex-col items-center justify-center w-full bg-[#111827] py-16 px-6">
            <div className="text-center mb-10">
                <TextAnimate animation="slideUp" by="word" className="text-3xl font-bold text-white">
                    What People Are Saying
                </TextAnimate>
                <BlurFade delay={0.25} direction="up" inView>
                    <div className="text-lg text-gray-400 mt-2">
                        Don&apos;t just take our word for it. Here&apos;s what real people are saying about Dream Archive.
                    </div>
                </BlurFade>
            </div>

            <div className="relative flex w-full flex-col items-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#111827]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#111827]"></div>
            </div>
        </section>
    );
}
