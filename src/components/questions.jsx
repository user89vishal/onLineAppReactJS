import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ViewQuestion from "./ViewQuestion";
import Pagination from "../common/pagination";
import NavBar from "../components/navBar";
import dataFromJsonFile from "../service/allQuestions.json";
import { logout } from "../redux/action/actions";

function Question(props) {
  const skillLevel = useSelector((state) => state.skillLevel);
  const counter = useSelector((state) => state.counter);

  //get the user's skill level
  const examLevel = skillLevel[0].level;
  const questions = dataFromJsonFile[examLevel].questions;

  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();

  //if counter is 0 means time's up
  if (counter === 0) {
    props.history.replace({
      pathname: "/summry",
      state: { info: "Time's Up" },
    });
  }

  const handlePageChange = (page) => {
    if (page === "Previous" && pageNumber !== 0) {
      return setPageNumber(pageNumber - 1);
    } else if (page === "Next" && pageNumber !== questions.length - 1) {
      return setPageNumber(pageNumber + 1);
    } else if (
      page !== "Previous" &&
      page !== "Next" &&
      page < questions.length + 1
    ) {
      setPageNumber(page - 1);
    } else if (page === questions.length + 1) {
      props.history.replace({
        pathname: "/summry",
      });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    props.history.replace({
      pathname: "/",
    });
  };

  return (
    <div>
      <NavBar skillLevel={skillLevel[0].level} handleLogout={handleLogout} />
      <div className="container">
        <ViewQuestion
          pageNumber={pageNumber}
          data={questions}
          onPageChange={handlePageChange}
        />
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

//at line 21
// useEffect(() => {
//   if (user.email !== "") {
//     props.history.replace({
//       pathname: "/",
//     });
//   }
// }, []);
