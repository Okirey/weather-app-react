import axios from "axios";
import React, { useState, useEffect }from "react";
import "./WeatherForecast.css"

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

         useEffect(() => { setLoaded(false); }, [props]
        );
   

   function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
   }
    
   if(loaded){
    console.log(forecast);
    return (
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index) {
                if (index <5){                
                return (
                     <div className="col" key={index}>
                <WeatherForecastDay data = {dailyForecast} />                
            </div>
                );
                }
            })}
            
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