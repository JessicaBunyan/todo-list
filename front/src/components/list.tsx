import * as React from "react";
import { TodoListItem } from "./list-item";
import { get, post } from "./../utils/http";
import { ITodoList } from "./../models/todo-list.model";
import { useDispatch } from "react-redux";
import { setActiveList } from "../actions/todo-list-actions";
import { useTypedSelector } from "./../use-typed-selector";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { SubmittableInput } from "./input";

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

  const addItem = (item: string) => {
    list.items.push({
      id: "" + Math.random() * 10000,
      text: item,
      done: false,
    });
    post("http://localhost:8080/api/list", list).then((list: ITodoList) => {
      dispatch(setActiveList(list));
    });
  };

  return (
    <div className="">
      <Link to="/">
        <button className=" text-center btn-lg btn-light">Home</button>
      </Link>
      <div className="list card">
        <h3>{list.name}</h3>
        {list.items.map((item, index) => {
          return (
            <TodoListItem
              key={item.id}
              item={item}
              listId={list.id}
              index={index}
            />
          );
        })}
        <SubmittableInput
          placeholder={"Add another item... "}
          onSubmit={addItem}
        ></SubmittableInput>
      </div>
    </div>
  );
}
