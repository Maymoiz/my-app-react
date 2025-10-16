import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./weatherinfo";

export default function Weather(props) {
    const[ready, setReady] = useState(false);
    const[weatherData, setWeatherData] = useState({});
    const[city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.temperature.current),
            city: response.data.city,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000).toLocaleString(),
            wind: Math.round(response.data.wind.speed),
            icon_url:"https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg",
        });
        setReady(true);
    }

function handleSubmit(event){
        event.preventDefault();
        search();
        }

        function handleCityChange(event){
        setCity(event.target.value);
     }

    function search(){
         const apiKey = "6b0de8c4f230fd2bf4t68daf5046oe9a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    if (ready){
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Enter a city..."
                            className="form-control"
                            autoFocus="on"
                            onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" className="btn btn-primary w-100" value="Search"/>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            </div>
        ); 
     }else{
        search();
        return `Loading ${city}...`;
    
     }
    }