import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

const reviews = [
    {
        name: "Emily R.",
        body: "DreamArchive has genuinely changed the way I reflect on my dreams. The insights feel so personal, and the visual summaries make it easy to spot patterns I never noticed before.",
        rating: 5
    },
    {
        name: "Daniel M.",
        body: "I started using this app out of curiosity, but now it's part of my nightly routine. It's fascinating to see my emotions tracked over time based on my dreams.",
        rating: 4
    },
    {
        name: "Sophie L.",
        body: "The weekly summaries are my favorite feature! It’s like having a personal dream analyst helping me make sense of all these random stories from my sleep.",
        rating: 5
    },
    {
        name: "Carlos V.",
        body: "At first I was skeptical, but after a couple of weeks, I started noticing recurring themes that completely make sense. It’s helped me be more mindful in my waking life too.",
        rating: 5
    },
    {
        name: "Ava T.",
        body: "I’ve always wanted to journal my dreams but never stuck with it. DreamArchive makes it so easy, and the AI-generated insights give me something to think about every morning.",
        rating: 4
    },
    {
        name: "Liam K.",
        body: "What surprised me was how accurate the emotion tracking is! Seeing my moods plotted out based on my dreams has been an eye-opener.",
        rating: 5
    },
    {
        name: "Maya H.",
        body: "This app has made dream journaling way less intimidating. I love the clean interface, and the way it organizes my dreams by theme is genius.",
        rating: 5
    },
    {
        name: "Nathan C.",
        body: "I'm not usually into this kind of thing, but DreamArchive is actually pretty cool. It’s helped me notice when I’m stressed before I even realize it during the day.",
        rating: 4
    },
    {
        name: "Olivia F.",
        body: "I never realized how much my dreams reflected what’s going on in my life. DreamArchive makes me feel like I’m getting to know myself on a deeper level.",
        rating: 5
    },
    {
        name: "Zach P.",
        body: "The themes and symbols it pulls out from my dreams are eerily accurate. It’s like having a personal psychologist in my pocket.",
        rating: 5
    },
    {
        name: "Rachel W.",
        body: "The insights are helpful, but I wish there was a way to customize the analysis a little more. Overall though, I’m impressed.",
        rating: 4
    },
    {
        name: "Eric D.",
        body: "The emotion trends graph helped me connect some dots between how I’m feeling and my dreams. It’s subtle, but super valuable over time.",
        rating: 5
    },
    {
        name: "Isabella M.",
        body: "Honestly, this app makes me look forward to writing down my dreams in the morning. It's been a calming part of my routine now.",
        rating: 5
    },
    {
        name: "Tom S.",
        body: "I’m someone who barely remembers my dreams, but when I do, DreamArchive helps me make sense of them. Really useful for creative inspiration too!",
        rating: 4
    },
    {
        name: "Priya N.",
        body: "Love the design! Everything is so intuitive, and the charts and summaries are clear and helpful. It’s like dream journaling got an upgrade.",
        rating: 5
    },
    {
        name: "Chris B.",
        body: "I was surprised how much I enjoy looking back at old dreams and seeing recurring symbols pop up. Didn’t realize how much it would help with self-awareness.",
        rating: 4
    },
    {
        name: "Leah K.",
        body: "I’ve tried a bunch of journaling apps, but this one’s focus on dreams is exactly what I needed. The AI-generated summaries are a cool bonus!",
        rating: 5
    },
    {
        name: "Dylan M.",
        body: "Simple to use, no fluff. I record a dream, and it does the rest. Great tool for people who want to explore their subconscious without overthinking it.",
        rating: 4
    },
    {
        name: "Hannah P.",
        body: "The recurring symbol detection is spot on! Helped me notice things I would’ve missed otherwise. Highly recommend for anyone into dream analysis.",
        rating: 5
    },
    {
        name: "Ethan J.",
        body: "Wish I had found this app sooner. It’s fun, insightful, and it’s helped me track how I’ve been feeling over the last couple of months.",
        rating: 5
    },
    {
        name: "Sophia T.",
        body: "DreamArchive makes me feel like I’m writing a story about my own mind. The AI summaries are thoughtful without feeling generic.",
        rating: 5
    },
    {
        name: "Ben H.",
        body: "It’s not perfect, but it’s the best dream journal app I’ve found so far. Would love to see more features in future updates!",
        rating: 4
    },
    {
        name: "Molly R.",
        body: "I’ve been using DreamArchive for three weeks and already noticed patterns in my dreams. It’s like therapy I didn’t know I needed.",
        rating: 5
    }
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
                <Marquee pauseOnHover className="[--duration:120s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:120s]">
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
