import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      
     <h1 className="text-center">React Weather App</h1>
     <Weather defaultCity="Tokyo" />
     <footer>This project was created by <a href="https://github.com/Maymoiz" target="_blank" rel="noopener noreferrer">Moisha💕</a>. It is open-sourced on <a href="https://github.com/Maymoiz/my-app-react" target="_blank" rel="noopener noreferrer">Github</a> and hosted on <a href="https://mo-react-weather-app.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>.</footer>  
    </div>
  );
}

