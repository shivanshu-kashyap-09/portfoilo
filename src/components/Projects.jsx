import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLink } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      name: "Portfoilo",
      live_link: "https://ai-tripmate-ui.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/portfolio.git",
      points: [
        "Developed and maintained the university website.",
        "Improved UI design, responsiveness, and SEO.",
        "Collaborated with the dev team on daily updates."
      ]
    },
    {
      name: "Foodio",
      live_link: "https://foodios.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/foodio.git",
      points: [
        "Built a feature-rich food ordering platform using MongoDB, Express.js, React.js, Node.js, MySql and Redis.",
        "Integrated category-based restaurant filtering (Veg, Non-Veg, South Indian) with real-time menu updates.",
        "Added user functionalities including cart, wishlist, and secure order placement using REST APIs.",
        "Enabled Google OAuth2 login and email verification using Node Mail Sender.",
        "Designed a mobile-first UI using React Hooks, Toastify notifications, and Tailwind CSS for responsiveness."
      ]
    },
    {
      name: "Ai-Tripmate",
      live_link: "https://ai-tripmate-ui.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/Ai-Tripmate-ui.git",
      points: [
        "Designed and developed a responsive AI-powered trip planner using React.js and Spring Boot.",
        "Implemented Google OAuth2 authentication and Java Mail Sender for secure user verification.",
        "Used MongoDB forstoring user travel preferences and trip plans efficiently.",
        "Optimized REST APIs to enhance performance and reduce load times across the platform.",
        "Delivered a seamless, interactive UI with features like destination suggestions and trip summaries."
      ]
    },
    {
      name: "ChatBot",
      live_link: "https://ai-tripmate-ui.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/chatbot.git",
      points: [
        "Developed and maintained the university website.",
        "Improved UI design, responsiveness, and SEO.",
        "Collaborated with the dev team on daily updates."
      ]
    },
  ]

  return (
    <section className="min-h-screen mt-4 flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] relative text-3xl sm:text-5xl md:text-2xl lg:text-5xl font-serif"
      >
        Projects
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-orange-400 to-orange-700 origin-top"
        ></motion.div>

        {projects.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute left-1/2 transform -translate-x-1/2 bg-orange-500 border-4 border-orange-300 w-6 h-6 rounded-full shadow-[0_0_15px_#f97316]"
            ></motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`bg-[#1b1b1b] text-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] hover:shadow-orange-400/30 ${
                index % 2 === 0
                  ? "md:ml-[55%] text-left"
                  : "md:mr-[55%] text-left"
              }`}
            >
              <div className="flex flex-row gap-4 items-center mb-3">
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  className="text-xl font-semibold text-orange-400"
                >
                  <a href={exp.live_link} target="_blank" rel="noopener noreferrer">{exp.name}</a>
                </motion.h3>
                <motion.a
                  href={exp.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-white"
                >
                  <FaGithub size={22} />
                </motion.a>
                <motion.a
                  href={exp.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-white"
                >
                  <FaLink size={22} />
                </motion.a>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
