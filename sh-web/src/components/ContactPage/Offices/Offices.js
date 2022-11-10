import "./Offices.scss";

function Offices() {
  return (
    <div className="offices">
      <div className="offices-heading">
        <p className="clip">CONTACT DETAILS</p>
        <h1>Company Offices</h1>
      </div>

      <div className="offices-cards">
        <div className="offices-cards-card">
          <h3>Office in India</h3>
          <div className="card-content">
            <div>
              <i className="fas fa-location-dot location"></i>{" "}
              <p>
                Holmlia Senter vei 33, <br /> Del, India 1255
              </p>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>{" "}
              <p>
                +91-123-4567 <br /> info@shCon.com
              </p>
            </div>

            <div>
              <i className="fa-solid fa-clock"></i>
              <p>
                Monday - Friday <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>

        <div className="offices-cards-card">
          <h3>Office in India</h3>
          <div className="card-content">
            <div>
              <i className="fas fa-location-dot location"></i>{" "}
              <p>
                Holmlia Senter vei 33,
                <br /> Del, India 1255
              </p>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>{" "}
              <p>
                +91-123-4567 <br /> info@shCon.com
              </p>
            </div>

            <div>
              <i className="fa-solid fa-clock"></i>
              <p>
                Monday - Friday <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>

        <div className="offices-cards-card">
          <h3>Office in India</h3>
          <div className="card-content">
            <div>
              <i className="fas fa-location-dot location"></i>{" "}
              <p>
                Holmlia Senter vei 33,
                <br /> Del, India 1255
              </p>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>{" "}
              <p>
                +91-123-4567 <br /> info@shCon.com
              </p>
            </div>

            <div>
              <i className="fa-solid fa-clock"></i>
              <p>
                Monday - Friday <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offices;
