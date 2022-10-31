import "./Hero.scss";

import Navbar from "../../components/Navbar/Navbar";
import heroBg from "../../assets/hero-bg2.jpg";

function Hero() {
  return (
    <div className="hero">
      <Navbar></Navbar>
      
      <div className="hero-content">
        <img src={heroBg} alt="" />
        <h1 className="hero-heading">
          Safe, Reliable & high quality Construction
        </h1>
        <div className="hero-bottom">
          <div className="left">
            <h3>Safe, Reliable & high quality Construction</h3>
            <p>Construction quality is a crucial factor in grwoing your
business and staying profitable.</p>
      <a href="/">VIEW MORE <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49889 0.96674C8.48052 0.691209 8.24227 0.482738 7.96674 0.501107L3.47671 0.800443C3.20118 0.818811 2.99271 1.05706 3.01107 1.33259C3.02944 1.60813 3.2677 1.8166 3.54323 1.79823L7.53437 1.53215L7.80044 5.52329C7.81881 5.79882 8.05706 6.00729 8.3326 5.98893C8.60813 5.97056 8.8166 5.7323 8.79823 5.45677L8.49889 0.96674ZM1.37629 9.32925L8.37629 1.32925L7.62371 0.670747L0.623712 8.67075L1.37629 9.32925Z" fill="#CA3D00"/>
</svg>
</a>
          </div>
          <div className="right">
          <div className="arrow">
        <i className="fas fa-chevron-left left-own-arrow"></i>
      </div>
      <div className="arrow" >
        <i className="fas fa-chevron-right right-own-arrow"></i>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
