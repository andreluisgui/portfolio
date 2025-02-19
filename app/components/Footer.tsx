import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} André Soares. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="https://github.com/andreluisgui" className="hover:text-blue-400 transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/andr%C3%A9-luis-b40207172/" className="hover:text-blue-400 transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">
                            <Twitter className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <nav className="space-x-4">
                        <Link href="#" className="hover:text-blue-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">
                            Terms of Service
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}