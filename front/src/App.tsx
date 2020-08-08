import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ITodoList } from "./models/todo-list.model";
import { TodoList } from "./components/list";
// import {  } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./components/routes";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/root-reducer";
import { createStore } from "redux";

const store = createStore(
  rootReducer,
  {},
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const app = (
//     <Provider store={store}>
//         <Routes></Routes>
//     </Provider>
// )
function App() {
  // return <p>test</p>;
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
