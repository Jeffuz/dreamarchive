import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trees } from "lucide-react"

export default function Component() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Trees className="h-6 w-6" />
                    <span className="">Dream Archive</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/auth/login">Log In</Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/auth/signup">Sign Up</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

