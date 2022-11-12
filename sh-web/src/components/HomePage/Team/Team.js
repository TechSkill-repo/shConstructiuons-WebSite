import "./Teams.scss";
import Manager from "../../../assets/manager.png";

function Team() {
  return (
    <div className="team p-2">
      <div className="team-left">
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={Manager} alt="" />
            </div>
            <div class="card-content">
              <h4 class="name">Hanzla Haroon</h4>
              <div class="clip des">Manager</div>
              <div class="team-socials">
                <a href="#">
                  <i class="cl-icon-twitter"></i>
                </a>
                <a href="#">
                  <i class="cl-icon-facebook"></i>
                </a>
                <a href="#">
                  <i class="cl-icon-linkedin"></i>
                </a>
                <a href="#">
                  <i class="cl-icon-instagram"></i>
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="card hide">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                  <i class="cl-icon-twitter"></i>
                </a>
                <a href="#">
                  <i class="cl-icon-facebook"></i>
                </a>
                <a href="#">
                  <i class="cl-icon-linkedin"></i>
                </a>
                <a href="#">
                  <i class="cl-icon-instagram"></i>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-right">
        <p className="clip">OUR TEAM</p>
        <h1 className="team-heading">Meet Our Staff</h1>
        <p className="team-para">
          We have a wealth of experience working as main building contractors on
          all kinds of projects, big and small, from home maintenance and
          improvements to extensions, refurbishments and new builds.{" "}
        </p>
        <button className="homepage-btn">
          VIEW MORE{" "}
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49889 0.96674C8.48052 0.691209 8.24227 0.482738 7.96674 0.501107L3.47671 0.800443C3.20118 0.818811 2.99271 1.05706 3.01107 1.33259C3.02944 1.60813 3.2677 1.8166 3.54323 1.79823L7.53437 1.53215L7.80044 5.52329C7.81881 5.79882 8.05706 6.00729 8.3326 5.98893C8.60813 5.97056 8.8166 5.7323 8.79823 5.45677L8.49889 0.96674ZM1.37629 9.32925L8.37629 1.32925L7.62371 0.670747L0.623712 8.67075L1.37629 9.32925Z"
              fill="#CA3D00"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Team;
