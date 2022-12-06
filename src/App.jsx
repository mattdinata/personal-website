import React from 'react'
import useLocalStorage from 'use-local-storage'

// components
import Nav from './components/nav/Nav'
import Socials from './components/nav/Socials'
import About from './components/about/About'
import Education from './components/education/Education'
import Experiences from './components/experiences/Experiences'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

const App = () => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div> 
      {/* data-theme={theme} ADD TO DIV ABOVE */}
        {/* <div className="theme-toggle">
          <i onClick={switchTheme} className="fas fa-toggle-on"></i>
        </div> */}
      <section id="header"><About /></section>
      <section id="profile"> 
        <Nav />
        <Socials />
        <Education />
        <Experiences />
        <Projects />
      </section>
      <Footer />
    </div>
  )
}

export default App