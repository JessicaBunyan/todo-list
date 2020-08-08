import { ITodoList } from "./../models/todo-list.model";
import { ActionType } from "./action-types";

export function setActiveList(list: ITodoList) {
  return {
    type: ActionType.setActiveList,
    activeList: list,
  };
}

export function setAllLists(lists: ITodoList[]) {
  return {
    type: ActionType.setAllLists,
    lists: lists,
  };
}
