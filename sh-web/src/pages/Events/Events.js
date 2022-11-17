import React from 'react'
import Container from '../../components/Events/Container/Container'
import Hero from '../../components/Events/Hero/Hero'

function Events({type}) {
  return (
    <>
       <Hero type={type}></Hero>
       <Container></Container>
    
    </>
  )
}

export default Events