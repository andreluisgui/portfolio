import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    )
}