import React, { useEffect } from "react";
import "../../styles/Nav.css";
import {aboutList, servicesList, aboutImg, serviceImg} from "../data"

function Nav() {

  const handleBurger = () => {

    console.log("here")
      const navMenu = document.querySelector(".nav-links");
      // navMenu.style.transform = "translateX(0)";
       if(navMenu.classList.contains("nav-active")) {
         navMenu.classList.remove("nav-active");
      } else {
        navMenu.classList.add("nav-active");
      }
  }






  return (
    <div className="nav">
      <div className="logo">
        <h3>S.H. Constructions</h3>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            
            <a href="">Home</a>
          </li>
          <li className="about">
            <a className="about-link" href="">
              About
            </a>
            <div className="dropdown ">
              <div className="about-nav">

              <h4>About S.H.</h4>
              <ul className="about-list dropdown-list">
              { aboutList.map(item=><li key={item}>
                  
                  <a href="">{item}</a>
                </li>)}
              </ul>
              </div>
              <img
              className="about-img"
                src={aboutImg}
                alt=""
              />
            </div>
          </li>
          <li className="service">
            <a href="" className="services-link">
              Services
            </a>
            <div className="dropdown">
              <div className="service-nav">
              <h4>Services We Provide</h4>
              <ul className="about-list dropdown-list">
              { servicesList.map(item=><li key={item}>
                  
                  <a href="">{item}</a>
                </li>)}
              </ul>
              </div>
              <img
              className="services-img"
                src={serviceImg}
                alt=""
              />
            </div>
          </li>
          <li>
            <a href="">Clients</a>
          </li>
          <li>
            <a href="">CSR</a>
          </li>
          <li>
            <a href="">Safety</a>
          </li>
        </ul>
      </div>

      <input onClick={handleBurger} type="checkbox" id="change-hamburguer" />
      <a className="hamburguer" href="#">
        <span></span>
        <label htmlFor="change-hamburguer"></label>
      </a>
    </div>
  );
}

export default Nav;
