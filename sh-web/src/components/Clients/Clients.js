import React from 'react'
import '../../styles/Clients.css'
import {clientsList} from '../data'

function Clients() {
  return (
    <div className="clients">
        <h3>Our Clients</h3>
    <div className='clients-imgs'>

        
       { clientsList.map((client) => 
          <img src={client} alt="" />
          )}
          
        </div>
        <button className='about-btn'>See all <i className="fas fa-handshake"></i></button>
          </div>
  )
}

export default Clients