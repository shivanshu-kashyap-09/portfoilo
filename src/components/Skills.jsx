import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  const skills = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdr5PCIpWTPuLu8q4Fkv4esHKEqZaIoojO0Q&s", label: "Java" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", label: "JavaScript" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", label: "Python" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1086px-C_Programming_Language.svg.png", label: "C" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", label: "HTML5" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/CSS3_logo.svg/1200px-CSS3_logo.svg.png", label: "CSS3" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", label: "React" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png", label: "Tailwind CSS" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Expressjs.png", label: "Express.js" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Flask_logo.svg", label: "Flask" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Spring_Boot_Logo.png", label: "Spring Boot" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MySQL_Logo.png", label: "MySQL" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/MongoDB_Logo.png", label: "MongoDB" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Redis_Logo.png", label: "Redis" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Git-logo.svg", label: "Git & GitHub" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg", label: "Docker" }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-between text-center text-2xl font-semibold text-orange-500 mt-4">
      <h2 className="text-3xl mb-6 font-bold">Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map(({ img, label }) => (
          <SkillCard key={label} image={img} label={label} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
