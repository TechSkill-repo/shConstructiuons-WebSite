import React from 'react'
import '../../styles/Clients.css'
import {clientsList} from '../data'

function Clients() {
  return (
    <div className="clients">
        <h3><span className='cursive'>Our</span> Clients</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque ipsam magni quaerat saepe rem tempore sunt accusamus eveniet tempora?</p>
    <div className='clients-imgs'>

        
       { clientsList.map((client) => 
          <img src={client} alt="" key={client}/>
          )}
          
        </div>
        <button class="client-btn">View All</button>
          </div>
  )
}

export default Clients