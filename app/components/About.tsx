import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3">
                        <Image
                            src="/images/profile.jfif?height=400&width=400"
                            alt="André Soares"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-gray-700 mb-6">
                            With over 5 years of experience in web development, I specialize in creating scalable and performant
                            applications using modern technologies. My journey in tech started at XYZ University, where I earned my
                            degree in Computer Science.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            I'm passionate about staying on the cutting edge of web development, constantly learning and adapting to
                            new technologies. My expertise includes React, Node.js, Python, and cloud platforms like AWS and Google
                            Cloud.
                        </p>
                        <p className="text-lg text-gray-700">
                            When I'm not coding, you can find me contributing to open-source projects, writing tech articles, or
                            exploring the great outdoors.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}