import { Progress } from "@/app/components/ui/progress"

const skills = [
    { name: "React", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "Docker", level: 75 },
    { name: "Java", level: 80 },
]

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                                <span className="text-lg font-medium text-gray-700">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}