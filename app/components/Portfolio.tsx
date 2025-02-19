import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import PortfolioImage from "@/app/components/PortfolioImage"

const projects = [
  {
    title: "Nursing Evolution",
    description: "A mobile app that streamlines the nursing evolution process, allowing professionals and students to document patient progress efficiently. Features include patient registration, checklist-based evolution, automatic text generation, editing, and PDF export.",
    image: "/images/nurseapp.webp",
    technologies: ["Java", "Android", "SqLite"],
    liveDemo: "https://play.google.com/store/apps/details?id=com.app.enfermagemapp",
    github: "https://github.com/andreluisgui",
  },
  {
    title: "WhatsApp Customer Service Bot - My Succulent",
    description: "An intelligent WhatsApp bot that automates customer service for My Succulent floriculture. It provides real-time responses, product catalogs, and automated order management using WhatsApp Web API.",
    image: "/images/bot.webp",
    technologies: ["Node.js", "Puppeteer", "Telegram API"],
    liveDemo: "https://api.whatsapp.com/send?phone=86998187328&text=Olá, venho do portfolio e quero fazer um teste!",
    github: "https://github.com/andreluisgui",
  },
  {
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard using modern APIs and data visualization.",
    image: "/globe.svg",
    technologies: ["Vue.js", "D3.js", "OpenWeatherMap API"],
    liveDemo: "https://example.com",
    github: "https://github.com/andreluisgui",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <PortfolioImage src={project.image} alt={`${project.title} preview`} title={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}