import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const[ready, setReady] = useState(false);
    const[weatherData, setWeatherData] = useState({});

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

    if (ready){
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Enter a city..."
                            className="form-control"
                            autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary w-100">
                            Search
                        </button>
                    </div>
                </div>
            </form>
            <h1 className="mt-3">{weatherData.city}</h1>
            <ul>
                <li><FormattedDate date={weatherData.date} /></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.icon_url}
                        alt={weatherData.description} className="float-left"/>
                    <span className="temperature text-black">{weatherData.temperature}</span>
                    <span className="units">°C | °F</span>

                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );

 }else{
     const apiKey = "6b0de8c4f230fd2bf4t68daf5046oe9a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
 }   
  }