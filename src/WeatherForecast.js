import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props.latitude && props.longitude) {
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.longitude}&lat=${props.latitude}&key=6b0de8c4f230fd2bf4t68daf5046oe9a`;

      axios.get(apiUrl).then((response) => {
        setForecast(response.data.daily); // assuming 'daily' is the array of forecast days
      });
    }
  }, [props.latitude, props.longitude]);

  if (!forecast) return null;

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(0, 5).map((day, index) => (
          <div className="col" key={index}>
            <div className="WeatherForecast-day">
              {new Date(day.time * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>
            <img
              src={day.condition.icon_url}
              alt={day.condition.description}
              style={{ width: "50px", height: "50px" }}
              className="WeatherForecast-icon"
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(day.temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(day.temperature.minimum)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}