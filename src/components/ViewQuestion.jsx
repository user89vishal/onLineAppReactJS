import React, { useState } from "react";

function ViewQuestion(props) {
  const { pageNumber, data } = props;
  const [optionId, setOptionId] = useState("");

  const handleListClick = (optionObject) => {
    setOptionId(optionObject.OptionId);
  };

  return (
    <div className="m-5">
      <div>
        <span className="text-justify-center m-2">{pageNumber + 1}.</span>
        <span>{data[pageNumber].question}</span>
      </div>

      <ul className="list-group mt-5">
        {data[pageNumber].answers.map((ans) => (
          <li
            key={ans.OptionId}
            className={
              optionId === ans.OptionId
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleListClick(ans)}
          >
            {`${ans.OptionId}. ${ans.ans}`}
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-center m-4">
        <button type="button" className="btn btn-outline-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ViewQuestion;
