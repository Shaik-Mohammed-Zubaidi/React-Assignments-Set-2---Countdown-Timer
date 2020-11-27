import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [inputTime, setInputTime] = useState("");
  // let timerId = 0;
  const [timerId, setTimerId] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    setRemainingTime(remainingTime);
    setTimerId(timerId);
  }, [remainingTime, timerId]);
  const handleStart = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (inputTime.match(/^[a-zA-Z]+$/)) {
      setRemainingTime(0);
      return;
    }
    if (timerStarted) {
      console.log("inside started " + timerId);
      clearInterval(timerId);
      startTimer();
      return;
    }
    setTimerStarted(true);
    startTimer();
  };
  const startTimer = () => {
    setRemainingTime(Math.floor(inputTime));
    let id = setInterval(() => {
      setRemainingTime((oldRemainingTime) => {
        if (oldRemainingTime === 0) {
          clearInterval(id);
          return;
        }
        const newRemainingTime = oldRemainingTime - 1;
        return newRemainingTime;
      });
    }, 1000);
    setTimerId(id);
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            value={inputTime}
            onKeyDown={handleStart}
            onChange={(event) => setInputTime(event.target.value)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{remainingTime}</div>
    </div>
  );
};

export default App;
