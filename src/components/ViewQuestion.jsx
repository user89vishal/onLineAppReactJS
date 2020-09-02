import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOption } from "../redux/action/actions";

function ViewQuestion(props) {
  const { pageNumber, data, onPageChange } = props;
  const [optionId, setOptionId] = useState("");
  const [questionId, setQuestionId] = useState("");

  const answers = useSelector((state) => state.answers);

  const dispatch = useDispatch();

  const handleListClick = (optionObject) => {
    setOptionId(optionObject.OptionId);
    setQuestionId(data[pageNumber].id);
  };

  function handleClick() {
    dispatch(
      saveOption({
        qusId: questionId,
        ansId: optionId,
        correctOption: data[pageNumber].correctOption,
      })
    );
    onPageChange(pageNumber + 2);
    setOptionId("");
  }

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
        <button
          type="button"
          className="btn btn-primary"
          disabled={optionId ? false : true}
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ViewQuestion;
