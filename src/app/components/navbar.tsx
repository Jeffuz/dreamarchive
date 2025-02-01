import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trees } from "lucide-react"
import { Session } from "@supabase/supabase-js";

interface NavbarProps {
    session: Session | null;
}

export default function Component({ session }: NavbarProps) {
    console.log(session);
    return (
        <header className="sticky top-0 z-50 w-full border-b max-lg:px-6 bg-[#030712] border-gray-400">
            <div className="container mx-auto flex h-16 max-w-[980px] items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Trees className="h-6 w-6 text-lime-400" />
                    <span className="font-bold text-xl text-[#F3F4F6]">Dream Archive</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Button size="sm" className="bg-[#030712] hover:bg-[#030712] hover:text-lime-400 transition duration-300" asChild>
                        <Link href="/auth/login">Log In</Link>
                    </Button>
                    <Button size="sm" className="bg-lime-400 hover:bg-lime-500 text-[#030712]" asChild>
                        <Link href="/auth/signup">Sign Up</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

