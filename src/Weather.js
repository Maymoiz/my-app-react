import React from "react";
import './Weather.css';

export default function Weather() {
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
            <h1 className="mt-3">Pretoria</h1>
            <ul>
                <li>Wednesday 13:00</li>
                <li>Sunny</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg"
                        alt="Sunny" className="float-left" />
                    <span className="temperature text-black">25</span>
                    <span className="units">°C | °F</span>

                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: 60%</li>
                        <li>Wind: 10 km/h</li>
                        <li>Precipitation: 0%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }