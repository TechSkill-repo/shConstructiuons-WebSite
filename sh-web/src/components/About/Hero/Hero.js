import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero() {
  return (
   <div className="about-page">
            <Navbar></Navbar>
        <img className="about-hero-bg" src={heroBg} alt="" />
    <div className='about-hero'>

        <div className="about-hero-content">
          <h4>
            <span>
            Home 

            </span>
            <span className='delimeter'></span> 
            <span>

            About
            </span>
            </h4>
          <h1>About</h1>
        </div>

    
    </div>
    </div>
  )
}

export default Hero