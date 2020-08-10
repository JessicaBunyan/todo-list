import React from "react";
import "./App.css";
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

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
