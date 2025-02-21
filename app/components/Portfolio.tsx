"use client"
import { Button } from "@/app/components/ui/button"
import PortfolioImage from "@/app/components/PortfolioImage"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Nursing Evolution",
    description:
      "A mobile app that streamlines the nursing evolution process, allowing professionals and students to document patient progress efficiently. Features include patient registration, checklist-based evolution, automatic text generation, editing, and PDF export.",
    image: "/images/nurseapp.webp",
    technologies: ["Java", "Android", "SqLite"],
    liveDemo: "https://play.google.com/store/apps/details?id=com.app.enfermagemapp",
    github: "https://github.com/andreluisgui",
  },
  {
    title: "WhatsApp Customer Service Bot - My Succulent",
    description:
      "An intelligent WhatsApp bot that automates customer service for My Succulent floriculture. It provides real-time responses, product catalogs, and automated order management using WhatsApp Web API.",
    image: "/images/bot.webp",
    technologies: ["Node.js", "Puppeteer", "Telegram API"],
    liveDemo: "https://api.whatsapp.com/send?phone=86998187328&text=Olá, venho do portfolio e quero fazer um teste!",
    github: "https://github.com/andreluisgui",
  },
  {
    title: "Login & Authentication API",
    description:
      "A secure authentication API built with Spring Boot and Spring Security, implementing JWT-based authentication for user login, registration, and authorization.",
    image: "/images/auth-api.webp",
    technologies: ["Spring Boot", "Spring Security", "JWT", "REST API"],
    liveDemo: "https://github.com/andreluisgui/login-auth-api",
    github: "https://github.com/andreluisgui/login-auth-api",
  },
]

export default function Portfolio() {
  const handleButtonClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-[16/9] w-full">
                <PortfolioImage src={project.image} alt={`${project.title} preview`} title={project.title} />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 flex items-center justify-center gap-2 hover:bg-blue-50"
                      onClick={() => handleButtonClick(project.liveDemo)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 flex items-center justify-center gap-2 hover:bg-blue-50"
                      onClick={() => handleButtonClick(project.github)}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}