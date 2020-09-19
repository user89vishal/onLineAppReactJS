import React from "react";

const QuizInfo = ({ examInfo, onClickAgree }) => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h4>{examInfo.info}</h4>
      <h4>Time : {examInfo.timeForTest}</h4>
      <div className="mt-2">
        <h4>Number of question: {examInfo.numberOfQuestion}</h4>
      </div>
    </div>
  );
};

export default QuizInfo;
