import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initilizeTime } from "../redux/action/actions";
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
    dispatch(initilizeTime(20));

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
  }, []);

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

  return (
    <div className="timer">
      <li className="nav-item active bg-light">
        <a className="nav-link" to="/">
          {`Time Remaining: ${counter}`}
        </a>
      </li>
    </div>
  );
}

export default Timer;
