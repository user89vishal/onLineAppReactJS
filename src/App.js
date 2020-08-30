import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Timer from "./components/timer";
import Questions from "./components/questions";
import Register from "./components/register";
import NavBar from "./components/navBar";

function App() {
  return (
    <main>
      <NavBar />
      {/* <Questions /> */}
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" component={Questions} />
      </Switch>
    </main>
  );
}

export default App;
