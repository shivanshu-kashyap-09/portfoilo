import React from 'react'
import { FaCss3, FaDatabase, FaGithub, FaHtml5, FaJava, FaJs, FaLinkedin, FaPython, FaReact } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import shivanshu from "../assets/shivanshu.jpg"
import { FaC } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col text-center mt-4 min-w-screen">

      <div className="font-bold">
        
        <p className="text-4xl font-extrabold tracking-wide">
          Hi, I'm <span className="text-orange-500 drop-shadow-lg">Shivanshu Kashyap</span>
        </p>
        <p className="text-3xl text-orange-500 mt-2 font-bold tracking-wider drop-shadow-md">Full Stack Developer</p>
      </div>

      <div className='grid grid-cols-3'>

        <div className="flex flex-col gap-4 mt-10 text-2xl text-center ">
          <div className="font-bold">
            <p className="text-4xl font-extrabold tracking-wide">
              Transforming <span className="text-orange-500 drop-shadow-lg">code</span> and
            </p>
            <p className="text-3xl text-orange-500 mt-2 font-bold tracking-wider drop-shadow-md">logic into life.</p>
          </div>

          <div className="space-x-4 mt-30">
            <a
              href="#projects"
              className="bg-orange-500 text-white px-8 py-2 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
            >
              Projects ↗
            </a>
            <a
              href="#contact"
              className="border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="relative mt-8">
          <div className="absolute inset-0 bg-orange-100 rounded-full w-64 h-64 mx-auto blur-2xl opacity-40"></div>
          <img
            src={shivanshu}
            alt="Shivanshu Kashyap"
            className="relative z-10 w-95 h-95 object-cover rounded-full border-4 border-orange-500 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-2xl  mt-10">
          <h2 className="font-bold text-2xl text-orange-500 drop-shadow-md">Technical Skills:</h2>
          <span className='flex flex-row gap-4'>
            <FaJava size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
            <FaPython size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
            <FaJs size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
            <FaC size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
          </span>
          <span className='flex flex-row gap-4'>
            <FaHtml5 size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
            <FaCss3 size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
            <FaDatabase size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
            <FaReact size={36} className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" />
          </span>
          <h2 className="font-bold text-2xl text-orange-500 drop-shadow-md">Connect with me:</h2>
          <span className='flex flex-row gap-6'>
            <a href="#" aria-label="GitHub" className="hover:text-black transform hover:scale-110 transition-all duration-300 hover:drop-shadow-xl"><FaGithub size={44} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-xl"><FaLinkedin size={44} /></a>
            <a href="https://leetcode.com/u/Shivanshu_09/" aria-label="LeetCode" className="hover:text-orange-500 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-xl"><SiLeetcode size={44} /></a>
          </span>

        </div>
      </div>
    </section>
  )
}

export default Hero
