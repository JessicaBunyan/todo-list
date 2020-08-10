import { ITodoList, ITodoListDetail } from "./../models/todo-list.model";
import { TodoListAction, ActionType } from "./../actions/action-types";

export interface IActiveListState {
  list: ITodoList;
  listDetails: ITodoListDetail[];
}

export function todoList(
  prevState: IActiveListState,
  action: TodoListAction,
): IActiveListState {
  switch (action.type) {
    case ActionType.setActiveList:
      return { ...prevState, list: action.activeList };
    case ActionType.setAllLists:
      return { ...prevState, listDetails: action.lists };
    default:
      return null;
  }
}
