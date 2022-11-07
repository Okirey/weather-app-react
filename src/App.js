import React from "react";
import './App.css';
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="App">
     <div className="container">
    
      <Weather defaultCity ="Malaga" />
      <footer>
        This is an open-sourced project coded by Olena Korol - 
        <a href="https://github.com/Okirey/weather-app-react"> GitHub</a>
      </footer>
        </div>
    </div>
  );
}


