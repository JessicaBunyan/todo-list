export interface TodoList {
  id: string;
  name: string;
  createdOn: number;
  items: TodoListItem[];
}

export interface TodoListItem {
  id: string;
  text: string;
  done: boolean;
}
