import { combineReducers } from "redux";
import { ITodoList } from "./../models/todo-list.model";
import { todoList } from "./todo-list-reducer";

// export interface StoreState {
//   activeList: ITodoList;
// }

// const initialState: StoreState = {
//     // activeList: null
// }

export const rootReducer = combineReducers({
  todoList,
});
