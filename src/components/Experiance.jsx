import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "COER University, Roorkee",
      duration: "May 2025 – July 2025",
      points: [
        "Developed and maintained the university website.",
        "Improved UI design, responsiveness, and SEO.",
        "Collaborated with the dev team on daily updates."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "HashedBit Innovations Pvt. Ltd.",
      duration: "Feb 2025 – May 2025",
      points: [
        "Contributed to live client projects.",
        "Participated in daily progress meetings.",
        "Enhanced coding and teamwork skills."
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="lg:min-h-screen mt-4 flex flex-col items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12 font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] relative text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-serif"
      >
        Experience
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 md:h-full w-[3px] bg-gradient-to-b from-orange-400 to-orange-700 origin-top"
        ></motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute left-1/2 transform -translate-x-1/2 bg-orange-500 border-4 border-orange-300 w-6 h-6 rounded-full shadow-[0_0_15px_#f97316]"
            ></motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #f97316" }}
              transition={{ duration: 0.3 }}
              className={`bg-[#1b1b1b] text-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] transition-transform ${
                index % 2 === 0
                  ? "md:ml-[52%] lg:ml-[55%] text-left"
                  : "md:mr-[52%] lg:mr-[55%] text-left"
              }`}
            >
              <h3 className="text-xl font-semibold text-orange-400">{exp.role}</h3>
              <p className="text-sm text-gray-300 italic">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
