import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Hero.scss";
import heroBg from "../../../assets/about-page-hero.jpg";

function Hero() {
  return (
    <div className="csr-page">
      <Navbar></Navbar>
      <img
        className="csr-hero-bg"
        src={"https://www.dagrofa.dk/wp-content/uploads/CSR-web-1920x800.gif"}
        alt=""
      />
      <div className="csr-hero">
        <div className="csr-hero-content">
          <h4>
            <span>Home</span>
            <span className="delimeter"></span>
            <span>CSR</span>
          </h4>
          <h1>CSR</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
