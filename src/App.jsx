import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experiance from './components/Experiance';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
    <section id="projects">
      <Projects />
    </section>
    <Footer />
    </>
  )
}

export default App
