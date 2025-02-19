import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "André Soares - Web Developer Portfolio",
    description:
        "Personal portfolio of André Soares, a passionate full-stack developer specializing in React, Node.js, and cloud technologies.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}