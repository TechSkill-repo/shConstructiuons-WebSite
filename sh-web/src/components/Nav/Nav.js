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
            <div className="dropdown ">
              <div className="about-nav">

              <h4>About S.H.</h4>
              <ul className="about-list dropdown-list">
              { aboutList.map(item=><li>
                  
                  <a href="">{item}</a>
                </li>)}
              </ul>
              </div>
              <img
              className="about-img"
                src="https://images.unsplash.com/photo-1611795495232-a79c42303014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
              { servicesList.map(item=><li>
                  
                  <a href="">{item}</a>
                </li>)}
              </ul>
              </div>
              <img
              className="services-img"
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
