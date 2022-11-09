import "./AllServices.scss";
import workers from "../../../assets/workers.jpg";

function AllServices() {
  return (
    <div className="all-services">
      <div className="all-services-heading">
        <p className="clip">SERVICES WE OFFER</p>
        <h1>All Services </h1>
      </div>

      <div className="all-services-cards">
        <div className="all-services-cards-card">
          <img src={"https://cdn.pixabay.com/photo/2018/05/11/11/29/construction-3390318_960_720.jpg"} alt="" />
          <div>
          <p className="clip">01.</p>
            <h2>Man Power</h2>
            <p className="description">
              Lorem Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Aliquid, velit. ipsum dolor sit amet
              consectetur, adipisicing elit. Aperiam, suscipit.
            </p>
          </div>
        </div>
        <div className="all-services-cards-card">
          <img
            src="https://images.pexels.com/photos/5453837/pexels-photo-5453837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div>
          <p className="clip">02.</p>
            <h2>Technical Support</h2>
            <p className="description">
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nobis magni maxime exercitationem natus ab ullam vel quo dicta.
              ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              suscipit.
            </p>
          </div>
        </div>

        <div className="all-services-cards-card">
          <img
            src="https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div>
            <p className="clip">03.</p>
            <h2>Mechanical Maintainance</h2>
            <p className="description">
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nobis magni maxime exercitationem natus ab ullam vel quo dicta.
              ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              suscipit.
            </p>
          </div>
        </div>

        <div className="all-services-cards-card">
          <img
            src="https://images.pexels.com/photos/3757226/pexels-photo-3757226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div>
            <p className="clip">04.</p>
            <h2>Battery Maintainance</h2>
            <p className="description">
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nobis magni maxime exercitationem natus ab ullam vel quo dicta.
              ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              suscipit.
            </p>
          </div>
        </div>

        <div className="all-services-cards-card">
          <img
            src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div>
            <p className="clip">05.</p>
            <h2>Rebuilding Jobs</h2>
            <p className="description">
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nobis magni maxime exercitationem natus ab ullam vel quo dicta.
              ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              suscipit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices;
