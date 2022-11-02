import React from 'react'

import Achievements from '../../components/Achievements/Achievements'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Clients from '../../components/Clients/Clients'

function Home() {
  return (
    <div>
        
       <Hero></Hero>
      <About></About>
      <Achievements></Achievements>
      <Services></Services>
      <Clients></Clients>
        
    </div>
  )
}

export default Home