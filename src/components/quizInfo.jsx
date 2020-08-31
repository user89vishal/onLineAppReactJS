import React from "react";

const QuizInfo = ({ examInfo, onClickAgree }) => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h4>{examInfo.info}</h4>
      <h7>Time : {examInfo.timeForTest}</h7>
      <div className="mt-2">
        <h7>Number of question: {examInfo.numberOfQuestion}</h7>
      </div>
    </div>
  );
};

export default QuizInfo;
