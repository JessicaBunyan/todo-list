import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as React from "react";
import App from "./../App";
import { TodoList } from "./list";
import { Home } from "./home";

export function Routes() {
  return (
    <div>
      <div className="header mb-3">
        <h1 className="text-center mt-5">Todo List App</h1>
      </div>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/list/:listId" component={TodoList}></Route>
            <Route path="/lists"></Route>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
