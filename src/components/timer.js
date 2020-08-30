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

  useEffect(() => {
    console.log("Component is mounted");
    const persistedState = loadFromLocalStorage();
    console.log("persistedState in mount", persistedState.counter);

    if (persistedState.counter > 0) {
      dispatch({
        type: "setStateFromLocalStorage",
        value: persistedState.counter,
      });
    }
  }, []);

  function loadFromLocalStorage() {
    try {
      const serializeState = localStorage.getItem("state");
      if (serializeState === null) return undefined;
      return JSON.parse(serializeState);
    } catch (e) {
      console.log("Error while retriving from localStorage", e);
      return undefined;
    }
  }

  return (
    <div className="timer">
      <h1 className="alert-time">Time Remaining: {counter}</h1>
    </div>
  );
}

export default Timer;
