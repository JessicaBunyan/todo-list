import * as React from "react";
import { ITodoList } from "../models/todo-list.model";
import { TodoListItem } from "./list-item/list-item";

export interface ITodoListProps {
  list: ITodoList;
}

export function TodoList(props: ITodoListProps) {
  return (
    <div>
      {props.list.items.map((item, index) => {
        return <TodoListItem key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}
