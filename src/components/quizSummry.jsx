import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { logout, summry } from "../redux/action/actions";
import { timeTakenForQuiz } from "../common/calculateTime";
import NavBar from "../components/navBar";

const QuizSummry = (props) => {
  const answers = useSelector((state) => state.answers);
  const skillLevel = useSelector((state) => state.skillLevel);
  const user = useSelector((state) => state.user);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const candidateLevel = skillLevel[0].level;

  let timeTaken = timeTakenForQuiz(candidateLevel, counter);

  const numberOfCorrectAnswers = answers.filter(
    (ans) => ans.ansId === ans.correctOption
  );

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

  useEffect(() => {
    // fetch("http://localhost:9000/")
    //   .then((res) => res.text())
    //   .then((res) => console.log("Response isssss=======>", res));

    let candidateDetails = {
      candidateName: user.username.toUpperCase(),
      candidateEmail: user.email,
      candidateAnswers: answers,
    };

    console.log("Candidate's details: ", candidateDetails);

    axios
      .post("http://localhost:9000/api/report", candidateDetails)
      .then((res) => console.log("Response isssss=======>", res));
  }, []);

  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <div className="container justify-content-center mt-4">
        {props.location.state !== undefined ? (
          <h5>{props.location.state.info}</h5>
        ) : null}
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
