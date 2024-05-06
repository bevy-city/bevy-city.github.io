import { About, Contact, Experience, Hero, Tech, OurTeam, Footer,  } from "./components";

import React from 'react'
import Navbar from "./components/Navbar";

const Homepage = () => {
  return (
    <div>
      
        <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
        <Hero />
      </div>
      <About />
      
      <Experience />
      <Tech />
      <OurTeam />
      
      <div className='relative z-0'>
        
        
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default Homepage