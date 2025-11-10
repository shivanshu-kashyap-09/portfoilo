import React from 'react'
import { motion } from 'framer-motion'
import { FaCss3, FaDatabase, FaGithub, FaHtml5, FaJava, FaJs, FaLinkedin, FaPython, FaReact } from 'react-icons/fa'
import { SiLeetcode, SiGmail } from 'react-icons/si'
import { FaC } from 'react-icons/fa6'
import shivanshu from "../assets/shivanshu.jpg"

const Hero = () => {
  const resumeFile = '../../public/resume.pdf'
  return (
    <section className="min-h-screen flex flex-col items-center text-center px-4 lg:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="font-bold mt-4 md:mx-30"
      >
        <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
          Hi, I'm <span className="text-orange-500 drop-shadow-lg">Shivanshu Kashyap</span>
        </p>
        <p className="text-2xl sm:text-3xl text-orange-500 mt-2 font-bold tracking-wider drop-shadow-md">
          Full Stack Developer
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 mt-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 text-center order-2 lg:order-1"
        >
          <p className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            Transforming <span className="text-orange-500 drop-shadow-lg">code</span> and
          </p>
          <p className="text-2xl sm:text-3xl text-orange-500 font-bold tracking-wider drop-shadow-md">
            logic into life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-orange-500 text-white px-8 py-2 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all font-semibold"
            >
              Projects ↗
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              download={resumeFile}
              href="/resume.pdf"
              className="border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-white hover:shadow-lg transition-all font-semibold"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="absolute bg-orange-200 rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 blur-3xl opacity-40"></div>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={shivanshu}
            alt="Shivanshu Kashyap"
            className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-orange-500 shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 order-3"
        >
          <h2 className="hidden lg:block font-bold text-2xl sm:text-3xl text-orange-500 drop-shadow-md">
            Technical Skills:
          </h2>
          <div className="hidden lg:flex flex-wrap justify-center gap-4">
            {[FaJava, FaPython, FaJs, FaC, FaHtml5, FaCss3, FaDatabase, FaReact].map((Icon, i) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                key={i}
                className="text-gray-200 hover:text-orange-500 transition-all duration-300"
              >
                <Icon size={36} />
              </motion.div>
            ))}
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl text-orange-500 drop-shadow-md">
            Connect with me:
          </h2>
          <div className="flex justify-center gap-6">
            <motion.a whileHover={{ scale: 1.15 }} href="https://github.com/shivanshu-kashyap-09" className="hover:text-black transition-all duration-300">
              <FaGithub size={44} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.15 }} href="https://www.linkedin.com/in/shivanshu-kashyap-18b426244/" className="hover:text-blue-700 transition-all duration-300">
              <FaLinkedin size={44} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.15 }} href="mailto:kashyapshivanshu63@gmail.com" className="hover:text-red-500 transition-all duration-300">
              <SiGmail size={40} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.15 }} href="https://leetcode.com/u/Shivanshu_09/" className="hover:text-orange-500 transition-all duration-300">
              <SiLeetcode size={44} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
