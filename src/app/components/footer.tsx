import Link from "next/link";
import { Github, Mail, Trees } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export function Footer() {
    return (
        <footer className="w-full text-white px-6 pb-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">

                {/* Logo & Name */}
                <BlurFade delay={0.25} direction="up" inView>
                    <div className="flex items-center space-x-2">
                        <Trees size={24} className="text-lime-400" />
                        <div className="text-xl font-semibold">Dream Archive</div>
                    </div>
                </BlurFade>

                {/* Social Links */}
                <BlurFade delay={0.25} direction="up" inView>
                    <div className="flex space-x-6">
                        <Link href="https://github.com/Jeffuz/dreamarchive" target="_blank">
                            <Github size={20} className="text-gray-400 hover:text-white transition" />
                        </Link>
                        <Link href="mailto:jeffzhang0049@gmail.com">
                            <Mail size={20} className="text-gray-400 hover:text-white transition" />
                        </Link>
                    </div>
                </BlurFade>

                {/* Copyright */}
                <BlurFade delay={0.25} direction="up" inView>
                    <div className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Dream Archive. All rights reserved.
                    </div>
                </BlurFade>
            </div>
        </footer>
    );
}
