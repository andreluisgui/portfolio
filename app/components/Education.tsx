import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function Education() {
    const education = [
        {
            degree: "Postgraduate Specialization in Software Engineering",
            institution: "Estácio",
            period: "June 2021 - December 2022",
        },
        {
            degree: "Bachelor's Degree in Information Systems Management",
            institution: "Faculdade Maurício de Nassau",
            period: "Completed",
        },
    ]

    return (
        <section id="education" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {education.map((edu, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{edu.degree}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-gray-700">{edu.institution}</p>
                                <p className="text-sm text-gray-500">{edu.period}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}