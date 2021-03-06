import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Questions from "./components/questions";
import Register from "./components/register";
import ViewInfo from "./components/viewInfo";
import NotFound from "./components/notFound";
import QuizSummry from "./components/quizSummry";

function App() {
  return (
    <main>
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
