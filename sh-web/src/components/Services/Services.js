import React from "react";
import "../../styles/Services.css";
import { serviceCards as cards } from "../data";

function Services() {
  return (
    <div className="services">
      <h3>Services</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem quos
        deleniti esse reiciendis? Assumenda, nam. Iure ducimus tempore itaque?
      </p>

      <div className="cards">
        {cards.map((card) => (
          <div className="card">
            <img src={card.imgUrl} alt="" />
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      <button className="service-btn">all services <i class="fab fa-servicestack"></i></button>
    </div>
  );
}

export default Services;
