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
  console.log("in reducer");
  console.log(prevState);
  console.log(action);
  switch (action.type) {
    case ActionType.setActiveList:
      return { ...prevState, list: action.activeList };
    case ActionType.setAllLists:
      console.log("set all lists");
      console.log(action.lists);
      console.log({ ...prevState, lists: action.lists });
      return { ...prevState, listDetails: action.lists };
    default:
      return null;
  }
}
