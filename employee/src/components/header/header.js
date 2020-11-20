import React from "react";
import "./style.css";
import logo from "../images/office.jpg";

function header() {
    return (
      <div>
    <h1 className="header">The Office</h1>
    <img src={logo} alt="The Office" className="image"/>
    </div>
    )
  }

  export default header; 