import React from 'react'
import { motion } from 'framer-motion'
import github_profile from "../assets/github/github-profile.png"
import github_streak from "../assets/github/github-steak.png"

const Git = () => {
  return (
    <section className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-8">
      <motion.a
        href="https://github.com/shivanshu-kashyap-09"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_#f97316] transition-all duration-300"
      >
        <img
          src={github_profile}
          alt="GitHub Profile"
          className="w-full h-85 md:w-[550px] rounded-2xl hover:brightness-110 transition-all duration-300"
        />
      </motion.a>

      <motion.a
        href="https://github.com/shivanshu-kashyap-09"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_#f97316] transition-all duration-300"
      >
        <img
          src={github_streak}
          alt="GitHub Streak"
          className="w-full md:w-[550px] rounded-2xl hover:brightness-110 transition-all duration-300"
        />
      </motion.a>
    </section>
  )
}

export default Git
