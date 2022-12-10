import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
        <div className="row"></div>
        <div className="col-6"></div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Mostly Cloudy"
        />
        6°C
      </ul>
    </div>
  );
}
