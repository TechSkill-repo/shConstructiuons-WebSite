import "./SafetyWorks.scss";
import image from "../../../assets/saftyImage.jpeg";

function SafetyWorks() {
  return (
    <div className="safety-works p-2">
      <div className="safety-works-left">
        <p className="clip">WHAT WE PROVIDE</p>
        <h1>Safety Showcase</h1>
        <p className="safety-works-para">
          We have a wealth of experience working as main building contractors on
          all kinds of projects, big and small, from home maintenance and
          improvements to extensions, refurbishments and new builds.
        </p>
      </div>
      <div className="safety-works-right">
        <div className="safety-works-right-card">
          <img src={image} alt="" />
          <div className="safety-works-right-card-content">
            <p className="clip">Construction, Work</p>
            <h3>Landscape Works Safety</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SafetyWorks;
