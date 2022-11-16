import "./Companies.scss";
import { companies_logos as logos } from "../../data";

function Companies() {
  return (
    <div className="companies">
      <div className="companies-left">
        <p className="clip">MEET OUR PARTNERS</p>
        <h1>You are in a great company.</h1>
        <p className="description">
          We are a long-established, independent building services and home
          improvements company. We have a wealth of experience working as main
          building contractors on all kinds of projects, big and small, from
          home maintenance and improvements to extensions, refurbishments and
          new builds.
        </p>
      </div>
      <div className="companies-right">
        <div className="companies-right-row">
          {logos.slice(0, 2).map((logo) => (
            <div className="companies-right-row-card">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
        <div className="companies-right-row">
          {logos.slice(2, 4).map((logo) => (
            <div className="companies-right-row-card">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
        <div className="companies-right-row">
          {logos.slice(4).map((logo) => (
            <div className="companies-right-row-card">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
