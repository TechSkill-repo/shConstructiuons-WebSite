import React from 'react'

import Achievements from '../../components/HomePage/Achievements/Achievements'
import Hero from '../../components/HomePage/Hero/Hero'
import About from '../../components/HomePage/About/About'
import Services from '../../components/HomePage/Services/Services'
import Clients from '../../components/HomePage/Clients/Clients'
import Team from '../../components/HomePage/Team/Team'
import Events from '../../components/HomePage/Events/Events'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div>
        
       <Hero></Hero>
      <About></About>
      <Achievements></Achievements>
      <Services></Services>
      <Clients></Clients>
      <Team></Team>
      <Events></Events>
      <Footer></Footer>
        
    </div>
  )
}

export default Home