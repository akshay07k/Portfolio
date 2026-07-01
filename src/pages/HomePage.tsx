import React from 'react'
import { Home, AboutSection, Experience, Projects, Skills, Achievements, Contact } from '../components'

const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <AboutSection />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </>
  )
}

export default HomePage