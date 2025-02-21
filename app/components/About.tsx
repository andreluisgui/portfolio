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
                            alt="André Luis"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-4">André Luis</h3>
                        <h4 className="text-xl text-gray-600 mb-6">Software Engineer | Full Stack Developer | Java | Spring</h4>
                        <p className="text-lg text-gray-700 mb-6">
                            With over 6 years of experience in technology, I specialize in system development, process automation, and
                            data integration. My expertise lies in creating efficient, scalable, and secure solutions that optimize
                            operations, reduce costs, and support decision-making.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Throughout my career, I&apos;ve developed and implemented systems handling large volumes of data, ensuring
                            accuracy and reliability. I excel in complex integrations, API development, and building automated
                            workflows that facilitate communication between different platforms.
                        </p>
                        <p className="text-lg text-gray-700">
                            I&apos;m passionate about solving challenges with innovative, results-driven solutions, always seeking to
                            improve processes and stay updated with the latest technological advancements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}