import React from 'react'
import Container from '../../components/Events/Container/Container'
import Hero from '../../components/Events/Hero/Hero'
import Footer from '../../components/Footer/Footer'

function Events({type}) {
  return (
    <>
       <Hero type={type}></Hero>
       <Container></Container>
       <Footer></Footer>
    
    </>
  )
}

export default Events