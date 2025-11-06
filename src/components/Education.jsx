import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-110 flex flex-col text-center items-center font-semibold text-white mt-6 relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] relative text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-serif"
      >
        Qualification
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute border-t-2 border-orange-400 w-[700px] opacity-60 translate-y-60 origin-center"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute border-l-2 border-orange-400 h-20 w-0 translate-y-60 translate-x-0 opacity-70"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute w-10 h-10 rounded-full bg-orange-500 border-4 border-orange-300 shadow-[0_0_20px_#f97316] translate-y-55"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="border border-orange-500 bg-gradient-to-br from-orange-600/90 to-orange-500/80 h-24 w-60 rounded-xl flex flex-col justify-center items-center translate-y-56 shadow-[0_0_25px_#f97316] transition-all duration-300 hover:shadow-orange-400/50"
      >
        <span className="text-lg font-bold text-white drop-shadow-[0_0_6px_#fff3]">
          Intermediate (12<sup>th</sup>)
        </span>
        <h5 className="text-sm text-gray-200">S.V.M Ranipur, Haridwar</h5>
        <h2 className="text-orange-200 text-lg font-extrabold mt-1">82.4%</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute border-l-2 border-orange-400 h-20 w-0 translate-y-40 -translate-x-84 opacity-70"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute w-10 h-10 rounded-full bg-orange-500 border-4 border-orange-300 shadow-[0_0_20px_#f97316] translate-y-55 -translate-x-84"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="border border-orange-500 bg-gradient-to-br from-orange-600/90 to-orange-500/80 h-24 w-60 rounded-xl flex flex-col justify-center items-center -translate-y-32 -translate-x-84 shadow-[0_0_25px_#f97316] transition-all duration-300 hover:shadow-orange-400/50"
      >
        <span className="text-lg font-bold text-white drop-shadow-[0_0_6px_#fff3]">
          High School (10<sup>th</sup>)
        </span>
        <h5 className="text-sm text-gray-200">S.V.M Ranipur, Haridwar</h5>
        <h2 className="text-orange-200 text-lg font-extrabold mt-1">82.1%</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute border-l-2 border-orange-400 h-20 w-0 translate-y-40 translate-x-90 opacity-70"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute w-10 h-10 rounded-full bg-orange-500 border-4 border-orange-300 shadow-[0_0_20px_#f97316] translate-y-55 translate-x-90"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="border border-orange-500 bg-gradient-to-br from-orange-600/90 to-orange-500/80 h-24 w-60 rounded-xl flex flex-col justify-center items-center -translate-y-56 translate-x-90 shadow-[0_0_25px_#f97316] transition-all duration-300 hover:shadow-orange-400/50"
      >
        <span className="text-lg font-bold text-white drop-shadow-[0_0_6px_#fff3]">
          BCA
        </span>
        <h5 className="text-sm text-gray-200">COER University, Roorkee</h5>
        <h2 className="text-orange-200 text-lg font-extrabold mt-1">92.2%</h2>
      </motion.div>
    </motion.section>
  );
};

export default Education;
