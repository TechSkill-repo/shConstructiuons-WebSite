import './Staff.scss';
import Sliders from './Sliders';


function Staff() {

    
  return (
    <div className='staff' >

        <div className="staff-heading">
            <p className="clip">OUR TEAM</p>
            <h1>Meet Our Staff </h1>
            </div>

            <div className='slider-container'>
                <Sliders></Sliders>
            </div>
          
  
    </div>
  )
}

export default Staff