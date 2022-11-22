import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero() {
  return (
   <div className="safety-page">
            <Navbar></Navbar>
        <img className="safety-hero-bg" src={"https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
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