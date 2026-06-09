import React from "react";
import { motion } from "framer-motion";

const EducationCard = ({ title, school, score, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="relative border-2 border-orange-500 bg-gradient-to-br from-gray-900 to-[#1b1b1b] p-6 rounded-2xl flex flex-col justify-center items-center shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_#f97316] w-full max-w-[280px] sm:max-w-[320px] z-10"
  >
    <div className="absolute -top-4 w-8 h-8 rounded-full bg-orange-500 border-4 border-[#1b1b1b] shadow-[0_0_10px_#f97316]"></div>
    <span className="text-lg sm:text-xl font-bold text-white mt-2 text-center">
      {title}
    </span>
    <h5 className="text-sm text-gray-300 mt-2 text-center">{school}</h5>
    <h2 className="text-orange-400 text-lg sm:text-xl font-extrabold mt-2">{score}</h2>
  </motion.div>
);

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-[80vh] flex flex-col text-center items-center justify-center font-semibold text-white mt-10 px-4 relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] text-4xl sm:text-5xl font-serif"
      >
        Qualification
      </motion.h2>

      <div className="relative w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 mt-6">
        
        {/* Horizontal line for desktop / Vertical line for mobile */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute hidden md:block top-0 md:top-4 left-[10%] right-[10%] border-t-4 border-orange-500/50 z-0"
        ></motion.div>
        
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute block md:hidden top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-4 border-orange-500/50 z-0"
        ></motion.div>

        <EducationCard 
          title={<span>High School (10<sup>th</sup>)</span>}
          school="S.V.M Ranipur, Haridwar"
          score="82.1%"
          delay={0.2}
        />
        
        <EducationCard 
          title={<span>Intermediate (12<sup>th</sup>)</span>}
          school="S.V.M Ranipur, Haridwar"
          score="82.4%"
          delay={0.4}
        />

        <EducationCard 
          title="BCA"
          school="COER University, Roorkee"
          score="CGPA: 9.11"
          delay={0.6}
        />
      </div>
    </motion.section>
  );
};

export default Education;
