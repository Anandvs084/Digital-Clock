import React, { useState } from "react";
import { useEffect } from "react";
import "./index.css";
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiam = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )} ${meridiam}`;
  }
  function addZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="clock-container">
        <h1> Digital Clock</h1>
        <h1>{formatTime()}</h1>
      </div>
    </>
  );
}
export default Clock;
