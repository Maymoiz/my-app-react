import React, { useState, useEffect } from "react";

export default function FormattedDate() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  

  const dayName = days[currentTime.getDay()];
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  // Add leading zeros
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
 
  return (
    <div>
      {dayName} {" "} {hours}:{minutes}
    </div>
  );
}