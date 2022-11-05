import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(){
    return (
 <div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        <input type="serch" placeholder="enter a city" className="form-control"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-secondary"/>
        </div>
        </div>
    </form>
    <h1>Malaga</h1>
    <ul>
        <li>Saturday 15:13</li>
        <li>Clear</li>
    </ul>
    <div className="row">
        <div className="col-6">
          <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={80}
        animate={true}
      />
      25 °C
        </div>
        <div className="col-6">
            <ul>
                <li>Humidity: 80%</li>
                <li>Wind: 5 km/h</li>
            </ul>
        </div>
    </div>
 </div>
    )
}