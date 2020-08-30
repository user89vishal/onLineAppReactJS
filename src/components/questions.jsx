import React, { useState } from "react";
import ViewQuestion from "./ViewQuestion";
import Pagination from "../common/pagination";
import "./questions.css";
import dataFromJsonFile from "../service/allQuestions.json";

function Question(props) {
  const questions = dataFromJsonFile.questions;
  const [pageNumber, setPageNumber] = useState(0);

  const handlePageChange = (page) => {
    if (page === "Previous" && pageNumber !== 0) {
      return setPageNumber(pageNumber - 1);
    } else if (page === "Next" && pageNumber !== questions.length - 1) {
      return setPageNumber(pageNumber + 1);
    } else if (page !== "Previous" && page !== "Next") {
      setPageNumber(page - 1);
    }
  };

  return (
    <div className="container">
      <ViewQuestion pageNumber={pageNumber} data={questions} />
      <Pagination
        activePageNumber={pageNumber + 1}
        itemsCount={questions.length}
        pageSize={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Question;
