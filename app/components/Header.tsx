import Link from "next/link"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    André Soares
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {["About", "Experience", "Portfolio", "Skills", "Education", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
                {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">Download Resume</Button> */}
            </div>
        </header>
    )
}