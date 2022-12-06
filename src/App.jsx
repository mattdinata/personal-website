import React from 'react'

// components
import Nav from './components/nav/Nav'
import Socials from './components/nav/Socials'
import About from './components/about/About'
import Education from './components/education/Education'
import Experiences from './components/experiences/Experiences'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    
      <section id="header"><About /></section>
        
      <section id="profile"> 
        <Nav />
        <Socials />
        <Education />
        <Experiences />
        <Projects />
      </section>

      <Footer />
    </>
  )
}

export default App