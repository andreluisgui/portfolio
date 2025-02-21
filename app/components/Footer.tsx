"use client"

import Link from "next/link"
import { Github, Linkedin, Phone } from "lucide-react"
import { useToast } from "@/app/components/ui/use-toast"

export default function Footer() {
    const { toast } = useToast()

    const handleWhatsAppClick = () => {
        try {
            const whatsappUrl = "https://api.whatsapp.com/send?phone=86999304110&text=Olá, vim do seu portfólio!"
            window.open(whatsappUrl, "_blank", "noopener,noreferrer")
            toast({
                title: "Opening WhatsApp",
                description: "Redirecting to WhatsApp chat...",
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to open WhatsApp. Please try again.",
            })
        }
    }

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} André Soares. All rights reserved.</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link
                            href="https://github.com/andreluisgui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/andr%C3%A9-luis-b40207172/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <button
                            onClick={handleWhatsAppClick}
                            className="hover:text-green-400 transition-colors relative group p-0 h-6 w-6"
                        >
                            <Phone className="h-6 w-6" />
                            <span className="sr-only">WhatsApp</span>
                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                Chat on WhatsApp
                            </span>
                        </button>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <nav className="space-x-4 text-sm">
                        <Link href="#" className="hover:text-blue-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#contact" className="hover:text-blue-400 transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}