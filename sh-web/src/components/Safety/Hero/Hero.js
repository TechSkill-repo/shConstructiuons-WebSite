import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero() {
  return (
   <div className="safety-page">
            <Navbar></Navbar>
        <img className="safety-hero-bg" src={heroBg} alt="" />
    <div className="safety-hero">

        <div className="safety-hero-content">
          <h4>
            <span>
            Home 

            </span>
            <span className='delimeter'></span> 
            <span>

            Safety
            </span>
            </h4>
          <h1>Safety</h1>
        </div>

    
    </div>
    </div>
  )
}

export default Hero