import './Description.scss'
import { safety_cards as cards} from '../../data'

function Description() {
    let count=1;
  return (
    <div className="safety-desc">
        <div className="safety-desc-row">
         {
            cards.slice(0,2).map((card,index)=> <div className="safety-desc-row-card">

            <p className="clip idx">{`0${count++}.`}</p>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
        </div>
            )
         }
       
       
        </div>
        <div className="safety-desc-row">
         {
            cards.slice(2,4).map((card,index)=> <div className="safety-desc-row-card">

            <p className="clip idx">{`0${count++}.`}</p>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
        </div>
            )
         }
       
       
        </div>
        <div className="safety-desc-row">
         {
            cards.slice(4).map((card,index)=> <div className="safety-desc-row-card">

            <p className="clip idx">{`0${count++}.`}</p>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
        </div>
            )
         }
       
       
        </div>
    </div>
  )
}

export default Description