import Image from "next/image"
import { Button } from "@/app/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveDemo: "https://example.com",
    github: "https://github.com/example",
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with real-time updates.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Firebase", "Material-UI"],
    liveDemo: "https://example.com",
    github: "https://github.com/example",
  },
  {
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard using modern APIs and data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "D3.js", "OpenWeatherMap API"],
    liveDemo: "https://example.com",
    github: "https://github.com/example",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
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