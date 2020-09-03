import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Timer from "./components/timer";
import Questions from "./components/questions";
import Register from "./components/register";
import ViewInfo from "./components/viewInfo";
import NotFound from "./components/notFound";
import QuizSummry from "./components/quizSummry";
import { logout } from "./redux/action/actions";

function App(props) {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user === undefined) {
  //     dispatch(logout());
  //     props.history.push({
  //       pathname: "/",
  //     });
  //   }
  // }, [user]);

  return (
    <main>
      {/* <Questions /> */}
      <Switch>
        <Route path="/viewInfo" component={ViewInfo} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/quiz-start" exact component={Questions} />
        <Route path="/summry" exact component={QuizSummry} />
        <Route path="/" component={Register} />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
