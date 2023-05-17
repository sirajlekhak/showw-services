import React from "react";
import "./App.css"; // Import the CSS file for styling
import logo from "./logo.svg"; // Import the logo image
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <Link className="text-col" to="/">
          Showwcase Services
        </Link>{" "}
      </div>

      <Link to="/DiscoverPage">Discover</Link>
      <Link to="/YourServices">Your Services</Link>
    </div>
  );
}

export default Sidenav;
