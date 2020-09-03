import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { logout, summry } from "../redux/action/actions";
import NavBar from "../components/navBar";
import QuizInfo from "./quizInfo";

const QuizSummry = (props) => {
  const answers = useSelector((state) => state.answers);
  const skillLevel = useSelector((state) => state.skillLevel);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const numberOfCorrectAnswers = answers.filter(
    (ans) => ans.ansId === ans.correctOption
  );

  console.log("skillLevel: ", skillLevel);

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
              <td>8 Minutes</td>
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
