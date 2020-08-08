import * as React from "react";
import { TodoListItem } from "./list-item";
import { get } from "./../utils/http";
import { ITodoList } from "./../models/todo-list.model";
import { useDispatch } from "react-redux";
import { setActiveList } from "../actions/todo-list-actions";
import { useTypedSelector } from "./../use-typed-selector";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export interface ITodoListProps {
  list: ITodoList;
}

export function TodoList(props: ITodoListProps) {
  console.log("in todo list");
  const dispatch = useDispatch();
  const { listId } = useParams();

  React.useEffect(() => {
    get("http://localhost:8080/api/list/" + listId).then((list: ITodoList) => {
      dispatch(setActiveList(list));
    });
  }, []);

  const list = useTypedSelector((s) => s.todoList && s.todoList.list);

  if (!list) {
    return null;
  }

  return (
    <div>
      <Link to="/">
        <button className=" text-center btn-lg btn-light">Home</button>
      </Link>
      <div>
        <h3>{list.name}</h3>
        {list.items.map((item, index) => {
          return <TodoListItem key={item.id} item={item} index={index} />;
        })}
      </div>
    </div>
  );
}
