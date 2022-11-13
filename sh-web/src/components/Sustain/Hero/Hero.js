import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero() {
  return (
   <div className="sustain-page">
            <Navbar></Navbar>
        <img className="sustain-hero-bg" src={heroBg} alt="" />
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