import React from 'react'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Clients from '../../components/Clients/Clients'

function Home() {
  return (
    <div>
         <Nav></Nav>
         <Hero></Hero>
         <About></About>
         <Services></Services>
         <Clients></Clients>
    </div>
  )
}

export default Home