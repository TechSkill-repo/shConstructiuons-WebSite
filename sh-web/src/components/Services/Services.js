import React from "react";
import "../../styles/Services.css";
import { serviceCards as cards } from "../data";

function Services() {
  return (
    <div className="services">
      <h3>Services</h3>
      <p className="src-short">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem quos
        deleniti esse reiciendis? Assumenda, nam. Iure ducimus tempore itaque?
       etur adipisicing elit. Temporibus rerum dolorum doloribus voluptas repellat ratione maiores optio asperiores quaerat adipisci eius non, magni, autem distinctio quia, pariatur ex quos provident!
      </p>

      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.title}>
            <img src={card.imgUrl} alt="" />
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      <button className="service-btn">all services <i className="fab fa-servicestack"></i></button>
    </div>
  );
}

export default Services;
