import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props){

const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response){
    console.log(response.data.time);
    setWeatherData(
        {   ready: true,
            temperature:response.data.temperature.current,
            city: response.data.city,             
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
          
        }
    )
 
}
if(weatherData.ready){
 return (
 <div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        <input type="serch" placeholder="enter a city" className="form-control" autoFocus="on"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-secondary w-100"/>
        </div>
        </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li>
         {weatherData.date}
            </li>
        <li className ="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-1">
        <div className="iconAndTemp col-6">
          <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={60}
        animate={true}
       
      />
      <span className="temperature">  {Math.round(weatherData.temperature)}</span>
      <span className="unit">°C</span> 
        </div>
        <div className="col-6">
            <ul className="mt-3">
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} km/h</li>
            </ul>
        </div>        
    </div>
 </div>
    )
} else{
    const apiKey = `fbfc1ff848ef3c808f7at85bodf0ef27`;
    let city = `malaga`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
}   
}