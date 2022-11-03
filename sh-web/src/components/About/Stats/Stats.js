import "./Stats.scss";

function Stats() {
  return (
    <div className="stats p-2">
      <div className="left">
        <p className="clip">WHO WE ARE</p>
        <h1>Commercial construction firm serving for over three decades.</h1>
        <p className="description">
          We are a long-established, independent building services and home
          improvements company. We have a wealth of experience working as main
          building contractors on all kinds of projects, big and small, from
          home maintenance and improvements to extensions, refurbishments and
          new builds.
        </p>
      </div>
      <div className="right">
        <div className="row">
          <div className="stats-card">
            <div className="stats-card-top">
              <h1>
                150<sup>+</sup>
              </h1>
              <p>Projects</p>
            </div>
            <div className="stats-card-bottom clip">
              <p>
                We have a wealth of experience working as main building
                contractors.
              </p>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-card-top">
              <h1>
                80<sup>+</sup>
              </h1>
              <p>Clients</p>
            </div>
            <div className="stats-card-bottom clip">
              <p>
                We have a wealth of experience working as main building
                contractors.
              </p>
            </div>
          </div>
        </div>
        <div className="row row-2">
        
          <div className="stats-card">
            <div className="stats-card-top">
              <h1>
                98<sup>%</sup>
              </h1>
              <p>Satisfaction</p>
            </div>
            <div className="stats-card-bottom clip">
              <p>
                We have a wealth of experience working as main building
                contractors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
