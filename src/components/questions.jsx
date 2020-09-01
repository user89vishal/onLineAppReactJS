import React, { useState } from "react";
import { useSelector } from "react-redux";

import ViewQuestion from "./ViewQuestion";
import Pagination from "../common/pagination";
import "./questions.css";
import NavBar from "../components/navBar";
import dataFromJsonFile from "../service/allQuestions.json";

function Question(props) {
  const questions = dataFromJsonFile.questions;
  const [pageNumber, setPageNumber] = useState(0);

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("isLoggedIn questions.jsx", isLoggedIn);

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
    <div>
      <NavBar />
      <div className="container">
        <ViewQuestion pageNumber={pageNumber} data={questions} />
        <Pagination
          activePageNumber={pageNumber + 1}
          itemsCount={questions.length}
          pageSize={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Question;
