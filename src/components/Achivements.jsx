import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import hackathon5 from "../assets/achivements/hackathon5.jpg";
import java from "../assets/achivements/java-basic.png";
import ai_ml from "../assets/achivements/ai-ml.jpeg";
import poster from "../assets/achivements/poster.jpeg";
import hackathon4 from "../assets/achivements/hackathon4.jpeg";
import leetcode50 from "../assets/achivements/leetcode50.png";
import leetcode100 from "../assets/achivements/leetcode100.png";
import leetcode200 from "../assets/achivements/leetcode200.png";
import leetcode2025 from "../assets/achivements/leetcode2025.png";

const Achivements = () => {
  const achivements = [
    { name: "Hackathon 2025", org: "COER University", time: "October 2025", img: hackathon5 },
    { name: "AI-Machine Learning", org: "Reliance Foundation", time: "May 2025", img: ai_ml },
    { name: "Poster Presentation in ML Technology", org: "IIT Roorkee", time: "April 2025", img: poster },
    { name: "Hackathon 4.0", org: "COER University", time: "October 2024", img: hackathon4 },
    { name: "Java (Basic)", org: "HackerRank", time: "October 2024", img: java },
    { name: "50 Days Badge", org: "Leetcode", time: "February 2025", img: leetcode50 },
    { name: "100 Days Badge", org: "Leetcode", time: "April 2025", img: leetcode100 },
    { name: "200 Days Badge", org: "Leetcode", time: "July 2025", img: leetcode200 },
    { name: "Annual Badge 2025", org: "Leetcode", time: "October 2025", img: leetcode2025 },
  ];

  return (
    <section className="max-h-screen mt-10 flex flex-col items-center text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] text-4xl sm:text-5xl font-serif"
      >
        Achievements
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-full lg:max-w-6xl w-80 md:w-170"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {achivements.map((achiv, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl shadow-md hover:shadow-orange-500/30 transform transition-all duration-300 p-4 flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-72 w-full overflow-hidden rounded-xl mb-2"
                >
                  <motion.img
                    src={achiv.img}
                    alt={achiv.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full object-contain rounded-xl"
                  />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-semibold text-orange-400"
                >
                  {achiv.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-sm text-gray-300 italic"
                >
                  {achiv.org}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-sm text-gray-400"
                >
                  {achiv.time}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Achivements;
