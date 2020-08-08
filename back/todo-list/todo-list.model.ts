export interface TodoList {
  name: string;
  createdOn: number;
  items: TodoListItem[];
}

export interface TodoListItem {
  text: string;
  done: boolean;
}
