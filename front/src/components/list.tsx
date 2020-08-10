import * as React from "react";
import { TodoListItem } from "./list-item";
import { del, get, post } from "./../utils/http";
import { ITodoList } from "./../models/todo-list.model";
import { useDispatch } from "react-redux";
import { setActiveList } from "../actions/todo-list-actions";
import { useTypedSelector } from "./../use-typed-selector";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { SubmittableInput } from "./input";
import { faTrash, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ITodoListProps {
  list: ITodoList;
}

export function TodoList(props: ITodoListProps) {
  const dispatch = useDispatch();
  const { listId } = useParams();
  const history = useHistory();
  const list = useTypedSelector((s) => s.todoList && s.todoList.list);
  const controller = new AbortController(); // for cancelling long-polling

  React.useEffect(() => {
    get("http://localhost:8080/api/list/" + listId).then((list: ITodoList) => {
      dispatch(setActiveList(list));
    });
  }, []);

  React.useEffect(() => {
    if (list) {
      get("http://localhost:8080/api/poll/list", controller.signal)
        .then((v: ITodoList) => {
          if (list && v.id === list.id) {
            dispatch(setActiveList(v));
          }
        })
        .catch(() => {});
    }
    return () => controller.abort();
  });

  const addItem = (item: string) => {
    list.items.push({
      text: item,
      done: false,
    });
    post("http://localhost:8080/api/list", list).then((list: ITodoList) => {
      dispatch(setActiveList(list));
    });
  };

  const deleteList = () => {
    del("http://localhost:8080/api/list/" + list.id).then(() => {
      history.push("/");
    });
  };

  if (!list) {
    return null;
  }

  return (
    <div className="">
      <Link to="/">
        <button className="mega text-center btn-lg btn-light">
          <FontAwesomeIcon icon={faHome} />
        </button>
      </Link>
      <div className="list card">
        <h3>
          {list.name}{" "}
          <span className="float-right list-icons">
            <FontAwesomeIcon icon={faTrash} onClick={deleteList} />
          </span>
        </h3>
        <ol>
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
        </ol>
        <SubmittableInput
          placeholder={"Add another item... "}
          onSubmit={addItem}
        ></SubmittableInput>
      </div>
    </div>
  );
}
