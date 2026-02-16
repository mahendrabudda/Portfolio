import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import { Routes , Route } from 'react-router-dom'
import About from './components/About/about'
import Experience from './components/experience/experience'
import Education from './components/Education/education'
import Skills from './components/Skill/skill'
import Projects from './components/projects/project'
import Contact from './components/contact/contact'
const App = () => {
 
  const [showLogin , setShowLogin] = useState(false)
  
  return (
    <>
    <div className='app'>
      <Navbar />
      
      <Header />
      <About />
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
        
      

    </div>
    </>
    
  )
}

export default App
