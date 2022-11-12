import React from "react";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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