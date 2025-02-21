import Image from "next/image"

const testimonials = [
    {
        name: "Jane Doe",
        role: "Project Manager at TechCorp",
        image: "/placeholder.svg?height=100&width=100",
        quote:
            "André is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    },
    {
        name: "John Smith",
        role: "CTO at StartupX",
        image: "/placeholder.svg?height=100&width=100",
        quote:
            "Working with André was a pleasure. He's not only technically proficient but also a great communicator and team player.",
    },
    {
        name: "Emily Brown",
        role: "Senior Developer at InnovateTech",
        image: "/placeholder.svg?height=100&width=100",
        quote:
            "André's expertise in React and Node.js significantly improved our project's performance and user experience. I highly recommend him for any web development project.",
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            ;<p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}