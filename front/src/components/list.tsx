import * as React from "react";
import { TodoListItem } from "./list-item";
import { get } from "./../utils/http";
import { ITodoList } from "./../models/todo-list.model";
import { useDispatch } from "react-redux";
import { setActiveList } from "../actions/todo-list-actions";
import { useTypedSelector } from "./../use-typed-selector";
import { useParams } from "react-router";

export interface ITodoListProps {
  list: ITodoList;
}

export function TodoList(props: ITodoListProps) {
  const dispatch = useDispatch();
  const { listId } = useParams();

  React.useEffect(() => {
    get("http://localhost:8080/api/list/" + listId).then((list: ITodoList) => {
      dispatch(setActiveList(list));
    });
  }, []);

  useTypedSelector((s) => s.todoList);

  if (!props.list) {
    return null;
  }

  return (
    <div>
      <h3>{props.list.name}</h3>
      {props.list.items.map((item, index) => {
        return <TodoListItem key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}
