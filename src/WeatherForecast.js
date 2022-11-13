import axios from "axios";
import React, { useState }from "react";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);
   function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
   }


    
   if(loaded){
    console.log(forecast);
    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDay data = {forecast[0]} />
                
            </div>
        </div>
        </div>
        )} else {
        let city = props.city;
        let key = "fbfc1ff848ef3c808f7at85bodf0ef27";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`
        axios.get(apiUrl).then(handleResponse);
        return null;
        }
}