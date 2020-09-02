import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";

import QuizInfo from "./quizInfo";

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
  const [levelId, setLevelId] = useState(0);
  const [agree, setAgree] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.email) {
      props.history.replace({
        pathname: "/",
      });
    }
  }, []);

  const handleClick = (level) => {
    setLevelId(level.levelId);
  };

  const handleStartButton = () => {
    console.log("Quiz start", levelId, agree);
    props.history.push({
      pathname: "/quiz-start",
      state: { levelId: levelId, agree: agree },
    });
  };

  return (
    <div className="container">
      <h5 className="mt-3">Welcome {user.username.toUpperCase()}</h5>
      <ul className="list-group mt-5">
        {examLevel.map((level) => (
          <li
            key={level.levelId}
            className={
              levelId === level.levelId
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
          disabled={!(agree && levelId !== 0)}
          onClick={handleStartButton}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default ViewInfo;
