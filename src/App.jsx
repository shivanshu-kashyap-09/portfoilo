import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experiance from './components/Experiance';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Git from './components/Git';
import Achivements from './components/Achivements';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <Header />
     <section id="home">
      <Hero />
    </section>
    <section id="about">
      <About />
    </section>
     <section id="skills">
      <Skills />
    </section>
    <section id="education">
      <Education />
    </section>
     <section id="experiance">
      <Experiance />
    </section>
     <section id="github" className='hidden lg:block'>
      <Git />
    </section>
     <section id="projects">
      <Projects />
    </section>
     <section id="achivements">
      <Achivements/>
    </section>
    {/* <section id="contact">
      <Contact />
    </section> */}
    <section id="contact">
    <Footer />
    </section> 
    </>
  )
}

export default App
