import "./About.scss";
import card1 from "../../assets/about-card1.png";

function About() {
  return (
    <div className="about">
      <div className="left">
       
        <div className="row">
            <div className="card">
            <img src={card1} alt="" />
            <h3>Construction Management</h3>
            <p>
              We have wealth of experience working as main building contractors
            </p>
            <button>
              {" "}
              <i className="fas fa-chevron-right right-own-arrow"></i>
            </button>
          </div>
          <div className="card">
            <img src={card1} alt="" />
            <h3>Construction Management</h3>
            <p>
              We have wealth of experience working as main building contractors
            </p>
            <button>
              {" "}
              <i className="fas fa-chevron-right right-own-arrow"></i>
            </button>
          </div>
            </div>

            <div className="row">
            <div className="card">
            <img src={card1} alt="" />
            <h3>Construction Management</h3>
            <p>
              We have wealth of experience working as main building contractors
            </p>
            <button>
              {" "}
              <i className="fas fa-chevron-right right-own-arrow"></i>
            </button>
          </div>
          <div className="card">
            <img src={card1} alt="" />
            <h3>Construction Management</h3>
            <p>
              We have wealth of experience working as main building contractors
            </p>
            <button>
              {" "}
              <i className="fas fa-chevron-right right-own-arrow"></i>
            </button>
          </div>
            </div>
          
          
          
    
      </div>
      <div className="right">
        <p className="clip">WHAT WE OFFER</p>
        <h1 className="about-heading">
          Providing solutions for construction, management, and restoration.
        </h1>
        <p className="about-para">
          We are a long-established, independent building services and home
          improvements company. We have a wealth of experience working as main
          building contractors on all kinds of projects, big and small, from
          home maintenance and improvements to extensions, refurbishments and
          new builds.
        </p>
        <button>VIEW MORE  <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49889 0.96674C8.48052 0.691209 8.24227 0.482738 7.96674 0.501107L3.47671 0.800443C3.20118 0.818811 2.99271 1.05706 3.01107 1.33259C3.02944 1.60813 3.2677 1.8166 3.54323 1.79823L7.53437 1.53215L7.80044 5.52329C7.81881 5.79882 8.05706 6.00729 8.3326 5.98893C8.60813 5.97056 8.8166 5.7323 8.79823 5.45677L8.49889 0.96674ZM1.37629 9.32925L8.37629 1.32925L7.62371 0.670747L0.623712 8.67075L1.37629 9.32925Z" fill="#CA3D00"/>
</svg></button>
      </div>
    </div>
  );
}

export default About;
