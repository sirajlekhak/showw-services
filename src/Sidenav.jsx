import React from "react";
import "./App.css"; // Import the CSS file for styling
import logo from "./logo.svg"; // Import the logo image

function Sidenav() {
  return (
    <div className="sidenav">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <a className="text-col" href="#">Showwcase Services</a>
      </div>
      
      <a href="#">Discover</a>
      <a href="#">Your Services</a>
    </div>
  );
}

export default Sidenav;
