import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Asset Imports
import portfolio from '../assets/achivements/portfolio.png'
import foodio from '../assets/achivements/foodio.png'
import aiTripmate from '../assets/achivements/aitripmate.png'
import aiChatBot from '../assets/achivements/aichatbot.png'
import chatApp from '../assets/achivements/chatapp.png'
import eventify from '../assets/achivements/eventify.png'
import kisanMitra from '../assets/achivements/kisanmitra.png'
import nirmaniix from '../assets/achivements/nirmaniix.png'
import infotechsm from '../assets/achivements/infotechsm.png'

const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      live_link: "https://ai-tripmate-ui.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/portfolio.git",
      image: portfolio,
      tags: ["React", "Tailwind", "Framer Motion"],
      description: "A high-performance personal portfolio featuring fluid animations and a mobile-first interactive UI."
    },
    {
      name: "Foodio",
      live_link: "https://foodios.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/foodio.git",
      image: foodio,
      tags: ["MERN", "Redis", "OAuth2"],
      description: "Full-stack food ordering platform with real-time menu updates and secure order placement."
    },
    {
      name: "Ai-Tripmate",
      live_link: "https://ai-tripmate-ui.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/Ai-Tripmate-ui.git",
      image: aiTripmate,
      tags: ["Spring Boot", "React", "MongoDB"],
      description: "AI-powered trip planner that generates personalized itineraries based on user preferences."
    },
    {
      name: "AI ChatBot",
      live_link: "https://chat-with-ai-30na.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/chatbot.git",
      image: aiChatBot,
      tags: ["Groq AI", "React", "Node.js"],
      description: "Intelligent chatbot using Groq AI for context-aware responses and real-time interaction."
    },
    {
      name: "ChatApp",
      live_link: "https://chat-app.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/chatApp.git",
      image: chatApp,
      tags: ["Socket.io", "React", "Express"],
      description: "Real-time messaging application with group chat features and JWT authentication."
    },
    {
      name: "Eventify",
      live_link: "https://eventify.onrender.com/",
      github_link: "https://github.com/shivanshu-kashyap-09/eventify.git",
      image: eventify,
      tags: ["MERN Stack", "OAuth2", "Tailwind"],
      description: "An event management platform for creating, managing, and RSVPing to events."
    },
    {
      name: "KisanMitra",
      live_link: "https://kisanmitra.onrender.com/",
      github_link: "https://github.com/rohan700976/AiFarmerAssistantWeb.git",
      image: kisanMitra,
      tags: ["MERN", "AI", "Agriculture"],
      description: "Agriculture assistance platform providing crop recommendations and weather updates."
    },
    {
      name: "Nirmaniix",
      live_link: "https://nirmaniix.online/",
      github_link: "Private Repository",
      image: nirmaniix,
      tags: ["MERN", "Management", "Construction"],
      description: "Project management platform tailored for construction tracking and resource collaboration."
    },
    {
      name: "InfoTech SM",
      live_link: "https://infotechsm.in/",
      github_link: "Private Repository",
      image: infotechsm,
      tags: ["Social Media", "MERN", "Real-time"],
      description: "A feature-rich social media platform with real-time notifications and post interactions."
    }
  ]

  return (
    <section className="py-10 min-h-screen">
      <div className="md:max-w-[1263px] max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-2 font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] text-4xl sm:text-5xl font-serif"
                >
                  PROJECTS
                </motion.h2>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="pb-12"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="max-w-[400px]">
              <div className="group relative bg-[#151515] rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 mb-10">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute top-4 right-4 flex gap-3 translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-300">
                     {project.github_link !== "Private Repository" && (
                       <a href={project.github_link} target="_blank" rel="noreferrer" className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-orange-500 transition-colors">
                          <FaGithub size={18} />
                       </a>
                     )}
                    <a href={project.live_link} target="_blank" rel="noreferrer" className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-orange-500 transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full border border-orange-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                    {project.description} 
                  </p>

                  <motion.a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-bold text-white group-hover:gap-3 gap-2 transition-all underline decoration-orange-500 underline-offset-4"
                  >
                    VIEW PROJECT <span className="text-orange-500">→</span>
                  </motion.a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: #555 !important; }
        .swiper-pagination-bullet-active { background: #f97316 !important; }
      `}} />
    </section>
  )
}

export default Projects               