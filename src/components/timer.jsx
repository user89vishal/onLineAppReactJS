import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./timer.css";

function Timer(props) {
  const { timeLimit } = props;
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log("timeLimit: ", timeLimit);

  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        dispatch({ type: "decrement" });
      }, 1000);
  }, [counter]);

  // const persistedState = loadFromLocalStorage();

  // if (persistedState === undefined) {
  //   console.log("Counter is not set");
  // }

  // if (persistedState.counter > 0) {
  //   dispatch({
  //     type: "setStateFromLocalStorage",
  //     value: persistedState.counter,
  //   });
  // }

  // function loadFromLocalStorage() {
  //   try {
  //     const serializeState = localStorage.getItem("state");
  //     if (serializeState === null) return undefined;
  //     return JSON.parse(serializeState);
  //   } catch (e) {
  //     console.log("Error while retriving from localStorage", e);
  //     return undefined;
  //   }
  // }

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
