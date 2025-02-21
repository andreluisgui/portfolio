"use client"

import Image from "next/image"
import { useState } from "react"

interface PortfolioImageProps {
    src: string
    alt: string
    title: string
}

export default function PortfolioImage({ src, alt, title }: PortfolioImageProps) {
    const [isLoading, setLoading] = useState(true)

    return (
        <div className="relative w-full h-full bg-gray-200 overflow-hidden">
            <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                title={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`
          object-cover
          duration-700 ease-in-out
          ${isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"}
        `}
                onLoad={() => setLoading(false)}
            />
        </div>
    )
}