import React, { useEffect } from "react";
import "../../styles/Nav.css";
import {aboutList, servicesList} from "../data"

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
            <div className="dropdown">
              <ul className="about-list dropdown-list">
              { aboutList.map(item=><li>
                  
                  <a href="">{item}</a>
                </li>)}
              </ul>
              <img
                src="https://img.freepik.com/free-vector/factory-concept-illustration_114360-5418.jpg?w=740&t=st=1665770260~exp=1665770860~hmac=530b957bff40b130c8b12175751406708f092647470f61564e2d214a4a5393fe"
                alt=""
              />
            </div>
          </li>
          <li className="services">
            <a href="" className="services-link">
              Services
            </a>
            <div className="dropdown">
              <ul className="about-list dropdown-list">
              { servicesList.map(item=><li>
                  
                  <a href="">{item}</a>
                </li>)}
              </ul>
              <img
                src="https://img.freepik.com/free-photo/mobile-engineers_1098-15445.jpg?w=996&t=st=1665858205~exp=1665858805~hmac=ae753f72f4f38b0ea2a632039d3ab5566fca4d2dab83f211796926bc5b42985f"
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
      <a class="hamburguer" href="#">
        <span></span>
        <label for="change-hamburguer"></label>
      </a>
    </div>
  );
}

export default Nav;
