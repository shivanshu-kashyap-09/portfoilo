import React from "react";
import { motion } from "framer-motion";
import shivanshu from "../assets/shivanshu.jpg";

const About = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center text-white">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-500 rounded-bl-full opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-500 rounded-tr-full opacity-40"></div>

      <div className="container px-6 -py-2 relative z-10 flex flex-col-reverse lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-72 sm:w-80 md:w-96 md:mt-10 lg:mt-0">
            <motion.div
              className="absolute inset-0 bg-orange-500 rounded-3xl transform rotate-6"
              initial={{ rotate: 12, opacity: 0 }}
              animate={{ rotate: 6, opacity: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <motion.img
              src={shivanshu}
              alt="Professional Portrait"
              className="hidden md:block relative z-10 w-full h-auto rounded-3xl shadow-2xl transform -rotate-3"
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm <span className="text-orange-500">Shivanshu</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-orange-500"
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="leading-relaxed text-gray-300"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8 }}
          >
            I am a Full Stack Developer focused on building scalable, high-performance web applications. Currently pursuing a BCA at COER University, I have hands-on experience from internships at COER University and HashedBit Innovations, working on both frontend and backend systems. <br /><br />

            I specialize in Java, JavaScript, Python, React, Spring Boot, Node.js, Flask, MongoDB, and MySQL, and have built projects including an AI Tripmate, Foodio, AI ChatBot, ChatApp.
          </motion.p>

          <motion.p
            className="leading-relaxed text-gray-300"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 1 }}
          >
            Passionate about AI-driven solutions, efficient data handling, and continuous learning.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-colors duration-300"
            >
              GET IN TOUCH!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
