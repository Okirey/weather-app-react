import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

export default function(props){
    return ( 
        <div className="WeatherInfo">
    <h1>{props.weatherData.city}</h1>
    <ul>
        <li>
       <FormattedDate date={props.weatherData.date}/>
            </li>
        <li className ="text-capitalize">{props.weatherData.description}</li>
    </ul>
    <div className="row mt-1">
        <div className="iconAndTemp col-6">
          <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={60}
        animate={true}
       
      />
      <span className="temperature">  {Math.round(props.weatherData.temperature)}</span>
      <span className="unit">°C</span> 
        </div>
        <div className="col-6">
            <ul className="mt-3">
                <li>Humidity: {props.weatherData.humidity} %</li>
                <li>Wind: {props.weatherData.wind} km/h</li>
            </ul>
        </div>    
        </div>      
    </div>
    );
}