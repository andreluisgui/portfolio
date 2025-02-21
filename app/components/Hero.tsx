import { Button } from "@/app/components/ui/button"

export default function Hero() {
    return (
        <section id="hero" className="pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Hi, I'm André Soares – Crafting Innovative Web Solutions
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. I turn complex
                    problems into elegant, user-friendly solutions.
                </p>
                {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8">Explore My Work</Button> */}
            </div>
        </section>
    )
}