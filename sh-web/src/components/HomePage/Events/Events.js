import "./Events.scss";

function Events() {
  return (
    <div className="events p-2">
      <div className="heading">
        <div className="left">
          <p className="clip">Our Events</p>
          <h1>Recent Events</h1>
        </div>
        <div className="right">
          <button className="homepage-btn">VIEW MORE</button>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2022/01/shutterstock_1006180303-300x169.jpg" alt="" />
          </div>
          <p className="clip">{new Date().toLocaleDateString()}</p>
          <h3>Why subcontractors need to own their data</h3>
        </div>{" "}
        <div className="card">
          <div className="img">
            <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2022/01/bpost2-300x181.jpg" alt="" />
          </div>
          <p className="clip">{new Date().toLocaleDateString()}</p>
          <h3>How to make a concrete floor slip-resistant?</h3>
        </div>{" "}
        <div className="card">
          <div className="img">
            <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2022/01/bpost1-300x181.jpg" alt="" />
          </div>
          <p className="clip">{new Date().toLocaleDateString()}</p>
          <h3>Plans revealed for ‘world’s second tallest’ skyscraper</h3>
        </div>
      </div>
    </div>
  );
}

export default Events;
