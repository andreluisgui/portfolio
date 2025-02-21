import type React from "react"
import "./globals.css"
import "./styles/fonts.css"

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
            <body className="font-inter antialiased">{children}</body>
        </html>
    )
}