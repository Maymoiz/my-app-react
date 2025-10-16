import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1 className="mt-3">{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                       <WeatherIcon code={props.data.icon} />
                        <span className="temperature text-black">{props.data.temperature}</span>
                        <span className="units text-black">°C</span>
                           </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
}