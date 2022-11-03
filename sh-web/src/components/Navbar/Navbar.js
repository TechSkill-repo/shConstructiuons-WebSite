import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar p-2">
      <div className="logo cursive">S.H. Constructions</div>
      <ul className="nav-items">
        <li className="underline">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="underline">
          <Link to={'about'}>About</Link>
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
