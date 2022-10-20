import React from 'react'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Clients from '../../components/Clients/Clients'
import Testimonials from '../../components/Testimonials/Testimonials'
import Csr from '../../components/CSR/Csr'
import News from '../../components/News/News'

import ScrollAnimation from "react-animate-on-scroll";
import Footer from '../../components/Footer/Footer'
import Achievements from '../../components/Achievements/Achievements'

function Home() {
  return (
    <div>
         <Nav></Nav>
         <Hero></Hero>
         <ScrollAnimation animatePreScroll="false" animateIn="fadeInUp">

         <Achievements></Achievements>
         </ScrollAnimation>
         <ScrollAnimation animatePreScroll="false" animateIn="fadeInUp">


         <Services></Services>
         </ScrollAnimation>
         <ScrollAnimation animatePreScroll="false" animateIn="fadeInUp">

         <Clients></Clients>
         </ScrollAnimation>
         <ScrollAnimation animatePreScroll="false" animateIn="fadeInUp">

         <Testimonials></Testimonials>
         </ScrollAnimation>
         <ScrollAnimation animatePreScroll="false" animateIn="fadeInUp">

         <Csr></Csr>
         </ScrollAnimation>
         <ScrollAnimation animatePreScroll="false" animateIn="fadeInUp">

         <News></News>
         </ScrollAnimation>

         <Footer></Footer>
    </div>
  )
}

export default Home