import * as React from "react";
import { ITodoListItem } from "../models/todo-list.model";

export interface ITodoListItemProps {
  index: number;
  item: ITodoListItem;
}

export function TodoListItem(props: ITodoListItemProps) {
  const { item, index } = props;
  return (
    <div>
      {index}. {item.text}
      <input type="checkbox" checked={item.done}></input>
    </div>
  );
}
