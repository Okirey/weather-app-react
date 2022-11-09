import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";



export default function Weather(props){
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response){
    
    setWeatherData(
        {   ready: true,
            temperature: response.data.temperature.current,
            date: new Date(response.data.time * 1000),
            city: response.data.city,             
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon,
            description: response.data.condition.description,
                    }
    )
 }
function search(){
const apiKey = `fbfc1ff848ef3c808f7at85bodf0ef27`;   
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}
function handleCityChange(event){
  setCity(event.target.value);
}

if(weatherData.ready){
 return (
 <div className="Weather">
    <form onSubmit = {handleSubmit}>
        <div className="row">
            <div className="col-9">
        <input type="serch" placeholder="enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-light w-100"/>
        </div>
        </div>
    </form>
    <WeatherInfo data = {weatherData}/>
   
 </div>
    )
} else{
    search();
    return "Loading";
}   
}