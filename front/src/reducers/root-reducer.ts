import { combineReducers } from "redux";
import { todoList } from "./todo-list-reducer";

export const rootReducer = combineReducers({
  todoList,
});
