import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero() {
  return (
   <div className="sustain-page">
            <Navbar></Navbar>
        <img className="sustain-hero-bg" src={"https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
    <div className="sustain-hero">

        <div className="sustain-hero-content">
          <h4>
            <span>
            Home 

            </span>
            <span className='delimeter'></span> 
            <span>

            Sustainability
            </span>
            </h4>
          <h1>Sustainability</h1>
        </div>

    
    </div>
    </div>
  )
}

export default Hero