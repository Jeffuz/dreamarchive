import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Toaster } from "@/components/ui/toaster"


// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dream Archive",
  description: "A dream logging app that analyzes dream themes using AI and suggests connections between dreams.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>

    </html>
  )
}
