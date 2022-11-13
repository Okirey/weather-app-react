import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
    return ( 
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
        <li>
       <FormattedDate date={props.data.date}/>
            </li>
        <li className ="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-1">
        <div className="iconAndTemp col-6">
            <WeatherIcon code={props.data.icon} size = {64}/>
            <WeatherTemperature celsius={props.data.temperature} />
      
        </div>
        <div className="col-6 WeatherDetails">
            <ul className="mt-3 ">
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {props.data.wind} km/h</li>
            </ul>
        </div>    
        </div>      
    </div>
    );
}