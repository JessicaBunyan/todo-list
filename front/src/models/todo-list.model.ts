export interface ITodoList {
  id?: string;
  name: string;
  createdOn?: number;
  items: ITodoListItem[];
}

export interface ITodoListItem {
  id: string;
  text: string;
  done: boolean;
}
