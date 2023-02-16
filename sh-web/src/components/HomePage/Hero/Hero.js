import "./Hero.scss";

import Navbar from "../../Navbar/Navbar";
import heroBg from "../../../assets/hero-bg.jpg";

function Hero() {
  return (
    <div className="hero">
      <Navbar></Navbar>

      <div className="hero-content">
        <img src={heroBg} alt="" />
        <h1 className="hero-heading">
          A leading contractor in Plant Operations and Maintenance Since 1972
        </h1>
        <div className="hero-bottom">
          <div className="hero-bottom-left">
            <h3>Safe, Reliable & high quality Operations & Maintenance</h3>
            <p>
              Quantity and Safety are the crucial most factor in our line of
              business.
            </p>
          </div>
          {/* <div className="hero-bottom-right">
            <div className="arrow">
              <i className="fas fa-chevron-left left-own-arrow"></i>
            </div>
            <div className="arrow">
              <i className="fas fa-chevron-right right-own-arrow"></i>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
