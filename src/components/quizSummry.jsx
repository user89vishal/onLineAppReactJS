import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { logout, summry } from "../redux/action/actions";
import NavBar from "../components/navBar";
import QuizInfo from "./quizInfo";

const QuizSummry = (props) => {
  const answers = useSelector((state) => state.answers);
  const skillLevel = useSelector((state) => state.skillLevel);
  const user = useSelector((state) => state.user);
  const counter = useSelector((state) => state.counter);
  // const timeTaken = millisToMinutesAndSeconds(counter);

  const timeTaken = 0;

  if (skillLevel.level === "Beginner") {
    let timeAllocation = 5 * 60000;
    timeTaken = millisToMinutesAndSeconds(timeAllocation - counter);
  } else if (skillLevel.level === "Intermediate") {
    let timeAllocation = 8 * 60000;
    timeTaken = millisToMinutesAndSeconds(timeAllocation - counter);
  } else if (skillLevel.level === "Advance") {
    let timeAllocation = 12 * 60000;
    timeTaken = millisToMinutesAndSeconds(timeAllocation - counter);
  }

  const dispatch = useDispatch();

  const numberOfCorrectAnswers = answers.filter(
    (ans) => ans.ansId === ans.correctOption
  );

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  function handleOkClick() {
    dispatch(summry());
    props.history.replace({
      pathname: "/viewInfo",
    });
  }

  const handleLogout = () => {
    dispatch(logout());
    props.history.replace({
      pathname: "/",
    });
  };

  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <div className="container justify-content-center mt-4">
        <div>
          <h5>{`Hello ${user.username.toUpperCase()}, your test result is as follows`}</h5>
        </div>

        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Test Level</th>
              <th scope="col">Time Allowed</th>
              <th scope="col">Number of questions</th>
              <th scope="col">Number of questions attempted</th>
              <th scope="col">Time taken</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{skillLevel[0].info}</td>
              <td>{skillLevel[0].timeForTest}</td>
              <td>{skillLevel[0].numberOfQuestion}</td>
              <td>{answers.length}</td>
              <td>{timeTaken}</td>
              <td>
                {numberOfCorrectAnswers.length
                  ? numberOfCorrectAnswers.length
                  : 0}{" "}
                / {answers.length}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-center m-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleOkClick}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSummry;
