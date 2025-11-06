import React from "react";
import { motion } from "framer-motion";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.jpeg";
import js from "../assets/skills/js.png";
import c from "../assets/skills/c.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import tailwindcss from "../assets/skills/tailwind-css.png";
import node from "../assets/skills/node.png";
import flask from "../assets/skills/flask.png";
import springboot from "../assets/skills/springboot.png";
import mysql from "../assets/skills/mysql.png";
import mongodb from "../assets/skills/mongodb.png";
import redis from "../assets/skills/redis.png";
import github from "../assets/skills/github.png";
import docker from "../assets/skills/docker.png";

const SkillCard = ({ image, label }) => {
  return (
    <motion.div
      className="flex flex-col items-center bg-orange-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:scale-105 hover:bg-orange-300 hover:text-white transition-all duration-300 w-36 sm:w-40 md:w-44 lg:w-48"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={image}
        alt={label}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <h2 className="text-gray-800 text-base sm:text-lg font-semibold">{label}</h2>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { img: java, label: "Java" },
    { img: js, label: "JavaScript" },
    { img: python, label: "Python" },
    { img: c, label: "C" },
    { img: html, label: "HTML5" },
    { img: css, label: "CSS3" },
    { img: react, label: "React" },
    { img: tailwindcss, label: "Tailwind CSS" },
    { img: node, label: "Node.js" },
    { img: flask, label: "Flask" },
    { img: springboot, label: "Spring Boot" },
    { img: mysql, label: "MySQL" },
    { img: mongodb, label: "MongoDB" },
    { img: redis, label: "Redis" },
    { img: github, label: "Git & GitHub" },
    { img: docker, label: "Docker" }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 text-white">
      <motion.h2
        className="font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] relative text-4xl sm:text-5xl md:text-6xl font-serif mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {skills.map(({ img, label }) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <SkillCard image={img} label={label} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
