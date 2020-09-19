import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import QuizInfo from "./quizInfo";
import { setSkillLevel, logout, initilizeTime } from "../redux/action/actions";
import NavBar from "../components/navBar";

const examLevel = [
  {
    levelId: 1,
    level: "Beginner",
    info: "Beginner Level",
    timeForTest: "5 Minute",
    numberOfQuestion: "10",
    agree: false,
  },
  {
    levelId: 2,
    level: "Intermediate",
    info: "Intermediate Level",
    timeForTest: "8 Minute",
    numberOfQuestion: "15",
    agree: false,
  },
  {
    levelId: 3,
    level: "Advance",
    info: "Advance Level",
    timeForTest: "12 Minute",
    numberOfQuestion: "20",
    agree: false,
  },
];

const ViewInfo = (props) => {
  const [userLevel, setUserLevelId] = useState({
    userLevelId: 0,
    userLevelName: "",
  });
  //term and conditions agree checkbox
  const [agree, setAgree] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (level) => {
    setUserLevelId({
      ...userLevel,
      userLevelId: level.levelId,
      userLevelName: level.level,
    });
  };

  const handleStartButton = () => {
    // save levelId to redux
    let timeAllocation = 0;
    const examToProceed = examLevel.filter(
      (exam) => exam.levelId === userLevel.userLevelId
    );

    if (userLevel.userLevelId === 1) {
      timeAllocation = 5 * 60000;
    } else if (userLevel.userLevelId === 2) {
      timeAllocation = 8 * 60000;
    } else if (userLevel.userLevelId === 3) {
      timeAllocation = 12 * 60000;
    }

    //initilize time for quiz
    dispatch(initilizeTime(timeAllocation));

    //save quiz level in redux
    dispatch(setSkillLevel(examToProceed));
    props.history.push({
      pathname: "/quiz-start",
    });
  };

  const handleLogout = () => {
    dispatch(logout());
    props.history.replace({
      pathname: "/",
    });
  };

  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <div className="container">
        <h5 className="mt-3">{`Welcome ${user.username.toUpperCase()}, choose your skill level and terms to proceed.`}</h5>
        <ul className="list-group mt-5">
          {examLevel.map((level) => (
            <li
              key={level.levelId}
              className={
                userLevel.userLevelId === level.levelId
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => handleClick(level)}
            >
              <QuizInfo examInfo={level} />
            </li>
          ))}
        </ul>
        <div class="form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onClick={() => setAgree(!agree)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Agree with term and conditions
          </label>
        </div>

        <div className="d-flex justify-content-center m-4">
          <button
            type="button"
            className="btn btn-outline-success"
            disabled={!(agree && userLevel.userLevelId !== 0)}
            onClick={handleStartButton}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewInfo;
