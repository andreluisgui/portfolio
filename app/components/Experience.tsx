import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function Experience() {
    const experiences = [
        {
            title: "Software Developer",
            company: "Secretaria da Fazenda",
            period: "February 2024 - Present",
            description:
                "Responsible for building and maintaining tax and financial systems using Java and Spring Boot. Develop REST APIs, handle data processing, integrate payment systems, and manage databases while ensuring compliance with tax regulations.",
            responsibilities: [
                "API Development and Security",
                "Data Processing and ETL",
                "Payments and Revenue Systems",
                "Database and System Optimization",
                "Monitoring and Infrastructure",
            ],
            techStack: [
                "Java",
                "Spring Boot",
                "React",
                "Vue",
                "Keycloak",
                "Oracle",
                "CouchDB",
                "Pentaho",
                "Prometheus",
                "OpenShift",
            ],
        },
        // {
        //     title: "IT Manager",
        //     company: "Secretaria Municipal de Educação Teresina",
        //     period: "November 2021 - February 2024",
        //     description: "Managed IT operations for the Municipal Education Department of Teresina.",
        // },
        // {
        //     title: "Systems Programmer",
        //     company: "Secretaria Municipal de Educação Teresina",
        //     period: "December 2019 - November 2021",
        //     description: "Developed systems for Android mobile devices and Web projects using Java.",
        // },
    ]

    return (
        <section id="experience" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>
                                    {exp.title} at {exp.company}
                                </CardTitle>
                                <p className="text-sm text-gray-500">{exp.period}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">{exp.description}</p>
                                {exp.responsibilities && (
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                                        <ul className="list-disc list-inside">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {exp.techStack && (
                                    <div>
                                        <h4 className="font-semibold mb-2">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map((tech, idx) => (
                                                <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}