import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as React from "react";
import App from "./../App";
import { TodoList } from "./list";
import { Home } from "./home";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="list/:listId" component={TodoList}></Route>
        <Route path="lists"></Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
