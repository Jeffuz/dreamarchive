import { Trees } from "lucide-react"
import Image from "next/image"
import { SignupForm } from "@/components/signup-form"
import Link from "next/link"

export default function SignupPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2 bg-[#030712]">
            <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-black opacity-40 z-10" />
                <Image
                    src="/signup-dream.jpg"
                    alt="Dream Archive Login"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute inset-0 w-full h-full"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href="/" className="flex items-center gap-2 font-medium text-[#F3F4F6]">
                        <Trees className="h-6 w-6 text-lime-400" />
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
