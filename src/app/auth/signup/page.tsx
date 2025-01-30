import { GalleryVerticalEnd } from "lucide-react"

import { SignupForm } from "@/components/signup-form"
import Link from "next/link"

export default function SignupPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="relative hidden bg-muted lg:block">
                {/* Iamge */}
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href={"/"} className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Dream Archive
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
