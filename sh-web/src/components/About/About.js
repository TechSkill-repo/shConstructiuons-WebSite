import React from 'react'
import '../../styles/About.css'
import {aboutText as about} from '../data'

function About() {
  return (
    <div className='about'>
         <div className="about-content">

        <h3>About us</h3>
        <p>{about.text1}</p>
        <p>{about.text2}</p>

         </div>
         <img src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
    </div>
  )
}

export default About