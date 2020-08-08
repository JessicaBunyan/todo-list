import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ITodoList } from "./models/todo-list.model";
import { TodoList } from "./components/list";

const testList: ITodoList = {
  id: "foo",
  name: "Jessica test",
  items: [
    { id: "fsd", text: "this is an item", done: false },
    { id: "ffdsfds", text: "this is also an item", done: false },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>

      <TodoList list={testList}></TodoList>
    </div>
  );
}

export default App;
