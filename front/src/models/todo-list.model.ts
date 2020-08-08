export interface ITodoListDetail {
  id: string;
  name: string;
  numItems: number;
  numCompletedItems: number;
}

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
