import "./Container.scss";
import Picture1 from "../../../assets/Picture1.jpg";

function Container() {
  return (
    <div className="events-container">
      <div className="events-container-heading">
        <h1>Mass Meeting</h1>
        <p className="clip">AUG - 2022</p>
      </div>
      <div className="events-container-contents-table">
        <h3>Agendas:</h3>
        <ol>
          <li>
            OPENING SPEECH AND SAFETY PAUSE (RED STRIP AND INCIDENT REPORT
            SHARING)
          </li>
          <li>ADDRESS BY TSL EMPLOYEE</li>
          <li>ADDRESS BY S.H CONSTRUCTION TOP MANAGEMENT</li>
          <li>TWO WAY COMMUNICATION AND FEEDBACK SESSION</li>
          <li>QUIZ COMPETITION</li>
          <li>REWARD AND RECOGNITION</li>
          <li>PRIZE DISTRIBUTION FOR SAFETY QUIZ</li>
        </ol>
      </div>

      <div className="events-main">
        <div className="events-main-heading">
          <h1>Opening Speech</h1>
          <p className="clip">Mr. Tahir Khan (Site in-charge SHC)</p>
        
          <p className="clip">Location – RMBB</p>
        </div>
        <div className="events-main-contents">
          <div className="events-main-contents-left">
            <img src={Picture1} alt="" />
            <h3>Attendees:</h3>
            <ul className="attendees">
              <li>Mr. Tahir Khan (Site in-charge SHC)</li>
              <li>Mr. Ramesh Sharma (Site Supervisor)</li>
              <li>Mr. Abhishek (Site Safety Supervisor)</li>
              <li>Mr. Rahul Kumar (Site Safety Supervisor)</li>
              <li>All Workers</li>
            </ul>
          </div>
          <div className="events-main-contents-right">
            <h1>Mass Meeting Discussions</h1>
            <div className="events-main-contents-right">
              <h3>PRECAUTIONS DURING RAIN</h3>
              <ul>
                <li>Management of electrical power cable</li>
                <li>
                  Inspection of power cable prior to use, no leakage, no cut and
                  no splicing
                </li>
                <li>No work at height and open area</li>
                <li>
                  Inspection of power tools and equipment, Keep in safe dry
                  place
                </li>
                <li>Check the ground condition</li>
                <li>Keep yourself dry</li>
              </ul>
              <h3>BEHAVIOR SAFETY AT WORK</h3>
              <ul>
                <li>Management of electrical power cable</li>
                <li>
                  Inspection of power cable prior to use, no leakage, no cut and
                  no splicing
                </li>
                <li>No work at height and open area</li>
                <li>
                  Inspection of power tools and equipment, Keep in safe dry
                  place
                </li>
                <li>Check the ground condition</li>
                <li>Keep yourself dry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
