export interface TodoListAction {
  type: ActionType;
  [x: string]: any; // allow any additional data/property
}

export enum ActionType {
  setActiveList = "setActiveList",
  setAllLists = "setAllLists",
}
