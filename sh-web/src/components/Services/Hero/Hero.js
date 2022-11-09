import './Hero.scss'
import Navbar from '../../Navbar/Navbar'
import heroBg from '../../../assets/services-page-hero-bg.jpg'



function Hero() {
    return (
     <div className="service-page">
              <Navbar></Navbar>
          <img className="service-hero-bg" src={heroBg} alt="" />
      <div className='service-hero'>
  
          <div className="service-hero-content">
            <h4>
              <span>
              Home 
  
              </span>
              <span className='delimeter'></span> 
              <span>
  
              Services
              </span>
              </h4>
            <h1>Services</h1>
          </div>
  
      
      </div>
      </div>
    )
  }
  
  export default Hero