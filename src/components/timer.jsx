import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./timer.css";

function Timer() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        dispatch({ type: "decrement" });
      }, 1000);
  }, [counter]);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="timer">
      <li className="nav-item active bg-light">
        <a className="nav-link" to="/">
          {`Time Remaining: ${millisToMinutesAndSeconds(counter)}`}
        </a>
      </li>
    </div>
  );
}

export default Timer;
