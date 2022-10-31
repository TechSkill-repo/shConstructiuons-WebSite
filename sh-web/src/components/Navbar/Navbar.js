import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar p-2">
      <div className="logo cursive">S.H. Constructions</div>
      <ul className="nav-items">
        <li className="underline">
          <a href="#">Home</a>
        </li>
        <li className="underline">
          <a href="#">About</a>
        </li>
        <li className="underline">
          <a href="#">Services</a>
        </li>
        <li className="underline">
          <a href="#">Features</a>
        </li>
        <li className="underline">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
