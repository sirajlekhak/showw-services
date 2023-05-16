import React from "react";
import Sidenav from "../Sidenav";
import CreateService from "../CreateService";

function YourServices({onClick}) {
  return (
    <div className="App">
      <Sidenav />
      <CreateService/>
    </div>
  );
}

export default YourServices;
