import axios from "axios";
import React from "react";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
   function handleResponse(response){
    console.log (response.data.city);
   }


    let city = props.city;
    let key = "fbfc1ff848ef3c808f7at85bodf0ef27";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Sun</div>
                <WeatherIcon code = "rain-day" size = {42} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span> 
                    <span className="WeatherForecast-temperature-min"> 12°</span></div>
            </div>
        </div>
        </div>
        )
}