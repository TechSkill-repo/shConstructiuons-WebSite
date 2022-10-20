import React from 'react'
import '../../styles/Achievements.css'
import {achieve_cards as cards} from '../data'
function Achievements() {
  return (
    <div className='achievements'>

            <h3> <span className='cursive'>Our</span> Achievements</h3>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rerum fugiat corrupti expedita dolorum dignissimos, similique iste error quis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita nostrum temporibus aliquid ipsam odio illo sapiente omnis. Velit, voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, similique!</p>

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