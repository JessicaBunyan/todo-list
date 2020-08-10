export interface TodoList {
  id?: string;
  name: string;
  items: TodoListItem[];
}

export interface TodoListItem {
  id: string;
  text: string;
  done: boolean;
}
