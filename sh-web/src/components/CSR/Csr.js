import React from 'react'
import '../../styles/Csr.css'
import {csrCards as cards} from '../data'

function Csr() {
  return (
    <div className='csr'>

       <h3>CSR</h3>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, aliquam accusantium provident maiores esse nihil aut itaque harum, inventore, error unde similique officiis sapiente facilis tempora odit laboriosam vero quasi enim quos explicabo suscipit voluptas voluptate. Praesentium ea laboriosam tempore eos magni laudantium ducimus nisi. Minus quam commodi nesciunt natus!</p>
       <div className="csr-cards">
        {
            cards.map(card=>(

                   <div className="card">
                          <img src={card.imgUrl} alt=""/>
                           <h6>{card.desc}</h6>
                   </div>

            ))
        }
       
       </div>
       <a href="#">Read More</a>
      

    </div>
  )
}

export default Csr