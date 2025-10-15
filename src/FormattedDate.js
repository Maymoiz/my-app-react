import React from "react";

export default function FormattedDate(props) {
    let date = new Date(props.date);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
        <div>
            {day} {hours}:{minutes}
        </div>
    );
}