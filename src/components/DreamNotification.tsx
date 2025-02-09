import { cn } from "@/lib/utils";

interface DreamItem {
    id: string;
    title: string;
    description: string;
    created_at: string;
}

export const DreamNotification = ({ title, description, created_at }: DreamItem) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-xl p-4 border border-gray-800 bg-[#030712]/50",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
            )}
        >
            <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
                    <span className="text-sm sm:text-lg text-lime-400">{title}</span>
                    <span className="mx-1">·</span>
                    <span className="text-xs text-[#F3F4F6]">{created_at}</span>
                </figcaption>
                <p className="text-sm font-normal text-white/60">{description}</p>
            </div>
        </figure>
    );
};
