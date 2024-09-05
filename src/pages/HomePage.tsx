import React from 'react'
import { Home, AboutSection, Projects, Skills, Contact } from '../components'

const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <AboutSection />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default HomePage