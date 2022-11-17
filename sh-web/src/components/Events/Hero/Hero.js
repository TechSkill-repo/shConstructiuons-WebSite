import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero({type}) {
  return (
   <div className="events-page">
            <Navbar></Navbar>
        <img className="events-hero-bg" src={heroBg} alt="" />
    <div className="events-hero">

        <div className="events-hero-content">
          <h4>
            <span>
            Home 

            </span>
            <span className='delimeter'></span> 
            <span>

            Events
            </span>
            </h4>
          <h1>{type==="yearly"?"Yearly Events":type==="half-yearly"?"Half-Yearly Events":type==="quarterly"?"Quarterly Events":"Monthly Events"}</h1>
        </div>

    
    </div>
    </div>
  )
}

export default Hero