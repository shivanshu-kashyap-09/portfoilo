import React from 'react'
import shivanshu from "../assets/shivanshu.jpg"

const About = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-500 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-10 left-0 w-1/2 h-1/2 bg-orange-500 rounded-tr-full opacity-50"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-1/2">
            <div className="relative w-100 ml-15">
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transform rotate-6"></div>
              <img
                src={shivanshu}
                alt="Professional Portrait"
                className="relative z-10 w-full h-auto rounded-3xl shadow-xl transform -rotate-3 transition-transform duration-300 hover:rotate-0"
              />
            </div>
          </div>

          <div className="lg:w-1/2 mr-10 mb-10">
            <h1 className="text-6xl font-bold mb-4">
              Hello, I'm <span className="text-orange-500">Shivanshu</span>
            </h1>
            <h2 className="text-3xl font-medium text-orange-500 mb-6">Full Stack Developer</h2>

            <p className="mb-6 leading-relaxed">
              Detail-oriented and enthusiastic Full Stack Developer with hands-on experience in designing and developing scalable,
              high-performance web applications using modern JavaScript libraries and Python frameworks. Proficient in MERN stack,
              Flask, DevOps tools like Docker. Proven ability to build secure, platforms with robust backends and engaging UIs.
            </p>

            <p className="mb-8 leading-relaxed">
              Passionate about AI-driven solutions, efficient data handling, and continuous learning.
            </p>

            {/* Contact Section */}
            <div className="space-y-4">
              <a href="#contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-colors duration-300">
                GET IN TOUCH!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About