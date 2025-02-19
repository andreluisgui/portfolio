import { Progress } from "@/app/components/ui/progress"

export default function Skills() {
    const skills = [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "SQL (Oracle, PostgreSQL)", level: 85 },
        { name: "NoSQL (CouchDB)", level: 80 },
        { name: "React", level: 75 },
        { name: "Vue.js", level: 70 },
        { name: "Docker", level: 85 },
        { name: "OpenShift", level: 80 },
        { name: "API Development", level: 90 },
        { name: "ETL (Pentaho)", level: 85 },
    ]

    return (
        <section id="skills" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
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