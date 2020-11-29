import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const id = setInterval(startTimer, 1000);
    return () => {
      clearInterval(id);
    };
  }, [remainingTime]);
  const handleStart = (event) => {
    let inputTime = document.getElementById("timeCount").value;
    if (inputTime.length === 0) {
      setRemainingTime(0);
      return;
    }

    if (inputTime.match(/^[a-zA-Z]+$/)) {
      setRemainingTime(0);
      return;
    }
    if (event.keyCode !== 13) {
      return;
    }

    setRemainingTime(Number(inputTime));
    startTimer();
  };
  const startTimer = () => {
    if (remainingTime === 0 || remainingTime < 0) {
      return;
    }
    setRemainingTime(remainingTime - 1);
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleStart} /> sec.
        </h1>
      </div>
      <div id="current-time">{remainingTime}</div>
    </div>
  );
};

export default App;
