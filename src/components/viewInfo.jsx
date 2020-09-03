import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import QuizInfo from "./quizInfo";
import { setSkillLevel, logout } from "../redux/action/actions";
import NavBar from "../components/navBar";

const examLevel = [
  {
    levelId: 1,
    level: "Beginner",
    info: "Beginner Level",
    timeForTest: "10 Minute",
    numberOfQuestion: "10",
    agree: false,
  },
  {
    levelId: 2,
    level: "Intermediate",
    info: "Intermediate Level",
    timeForTest: "15 Minute",
    numberOfQuestion: "15",
    agree: false,
  },
  {
    levelId: 3,
    level: "Advance",
    info: "Advance Level",
    timeForTest: "20 Minute",
    numberOfQuestion: "20",
    agree: false,
  },
];

const ViewInfo = (props) => {
  const [userLevel, setUserLevelId] = useState({
    userLevelId: 0,
    userLevelName: "",
  });
  const [agree, setAgree] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.email) {
      props.history.replace({
        pathname: "/",
      });
    }
  }, []);

  const handleClick = (level) => {
    console.log("Level is:: ", level);
    setUserLevelId({
      ...userLevel,
      userLevelId: level.levelId,
      userLevelName: level.level,
    });
    console.log("Level id:: ", userLevel);
  };

  const handleStartButton = () => {
    //save levelId to redux

    const examToProceed = examLevel.filter(
      (exam) => exam.levelId === userLevel.userLevelId
    );

    dispatch(setSkillLevel(examToProceed));
    props.history.push({
      pathname: "/quiz-start",
      state: { levelId: userLevel.userLevelId, agree: agree },
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
          <label className="form-check-label" for="exampleCheck1">
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
