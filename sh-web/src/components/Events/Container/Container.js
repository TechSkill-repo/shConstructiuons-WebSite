import "./Container.scss";
import Picture1 from "../../../assets/Picture1.jpg";
import yearly1 from "../../../assets/yearly1.png";
import yearly2 from "../../../assets/yearly2.jpg";
import yearly3 from "../../../assets/yearly3.png";
import yearly4 from "../../../assets/yearly4.jpg";
import yearly5 from "../../../assets/yearly5.jpg";
import yearly6 from "../../../assets/yearly6.jpg";

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
          <p className="clip event-clip">Mr. Tahir Khan (Site in-charge SHC)</p>

          <p className="clip event-clip">Location – RMBB</p>
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

      <div className="events-main">
        <div className="events-main-heading">
          <h3>SAFETY PAUSE AND ADDRESSING EVENT</h3>
          <ul>
            <li>
              <p className="para">
                Safety Pause by Site Safety Supervisor Mr. Abhishek Shared the
                Incident and Lesson Learned with Crew
              </p>
            </li>
            <li>
              <p className="para">
                Mr. Tahir Khan (Site In-charge) addressed the employees on
                safety precautions during rain, behavior safety, CSM
                requirement, Corona Booster dose and skill upgradation and asked
                everyone to work safely and stay safe during rain
              </p>
            </li>
          </ul>
        </div>
        <div className="events-main-contents container2">
          <div className="events-main-contents-left">
            <img src={yearly1} alt="" />
          </div>
          <div className="events-main-contents-right">
            <img src={yearly3} alt="" />
          </div>
        </div>

        <div className="events-main-contents container2">
          <div className="events-main-contents-left">
            <h3>
              TWO WAY COMMUNICATION AND INTERACTION BETWEEN TSL REPRESENTATIVE,
              SHC REPRESENTATIVE AND WORKFORCE
            </h3>
            <p className="para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sint ipsa error nostrum quam laudantium asperiores quidem.
              Dolores, fuga error?Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Explicabo, fugiat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus eligendi officia vitae
              sequi in. Fugit, obcaecati! Nobis praesentium et repellendus.
            </p>
          </div>
          <div className="events-main-contents-right">
            <img src={yearly2} alt="" />
          </div>
        </div>
      </div>

      <div className="events-main">
        <div className="events-main-heading">
          <h3>QUIZ COMPETITON AND AWARD DISTRIBUTION</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            iusto quisquam, dolorem eveniet a similique inventore expedita
            officiis praesentium. Deleniti accusantium eos excepturi, odio
            veniam aliquid nobis similique consequuntur iusto optio temporibus
            qui, exercitationem alias veritatis dolor. Rem similique repellat
            cum maiores voluptatibus facere quo perferendis. Voluptas magni ad
            harum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quae.
          </p>
        </div>
        <div className="events-main-contents container2">
          <div className="events-main-contents-left qa">
            <img src={yearly4} alt="" />
            <p className="para">
              Que:- An easy way to know if you are maintaining the safe distance
              is to take ?
              <br />
              यह जानने का एक आसान तरीका है कि आप सुरक्षित दूरी बनाए रख रहे हैं ?
              <br />
              Ans:- “The two second rule” – Mr. Ganesh Kuntia
            </p>
          </div>
          <div className="events-main-contents-right qa">
            <img src={yearly5} alt="" />
            <p className="para">
              Que:- What is the length of safety harness lanyards?
              <br />
              सेफ्टी हार्नेस डोरी की लंबाई क्या है?
              <br />
              Ans:- “1.8 meter”–Mr. Shiv Charna Patro
            </p>
          </div>
        </div>
        
      </div>

      <div className="events-main reward">

        <div className="events-main-heading reward-heading">
          <h3>REWARD AND RECOGNITION</h3>
          <p className="para">
          Reward and Recognition: Employee of the Month- Mr. Rajesh Rana for excellent performance in the job
          </p>
        </div>
         
           <img src={yearly6} alt="" />
           
        </div>
    </div>
  );
}

export default Container;
