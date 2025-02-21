import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Education from "./components/Education"

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <About />
            <Experience />
            <Portfolio />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </main>
    )
}