import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero() {
  return (
   <div className="csr-page">
            <Navbar></Navbar>
        <img className="csr-hero-bg" src={"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
    <div className="csr-hero">

        <div className="csr-hero-content">
          <h4>
            <span>
            Home 

            </span>
            <span className='delimeter'></span> 
            <span>

            CSR
            </span>
            </h4>
          <h1>CSR</h1>
        </div>

    
    </div>
    </div>
  )
}

export default Hero