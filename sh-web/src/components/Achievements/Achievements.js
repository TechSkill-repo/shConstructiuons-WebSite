import React from 'react'
import './Achievements.scss'
import {achieve_cards as cards} from '../data'
function Achievements() {
  return (
    <div className='achievements p-2'>

            <p className="clip">WHAT WE OFFER</p>
            <h1 className="company-heading">
       Works Showcase
        </h1>

             <div className="achieve-cards">

                  { cards.map((card) => {
                          return (
                    <div className="achieve-card">
                        <img src={card.url} alt="" />
                        <div className="card-content">

                        <p className='subtext1'>{card.subText1}</p>
                        <h4>{card.title}</h4>
                        <p>{card.subText2}</p>
                        </div>
                        </div>)
                  })
                        
                    }
             </div>



    </div>
  )
}

export default Achievements