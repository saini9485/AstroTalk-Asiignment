import React from "react";

import "../navbar/Navbar.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://astrotalk.com/assets/images/astrotalk_logo.png"/>
        </div>
        <div className="navbar-item">
          <a href="#">home</a>
        </div>
        <div className="navbar-item">
          <a href="#">Services</a>
        </div>
        <div className="navbar-item">
          <a href="#">Profile</a>
        </div>
        <div className="navbar-item">
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
}
