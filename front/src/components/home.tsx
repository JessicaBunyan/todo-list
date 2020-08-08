import * as React from "react";
import { get } from "./../utils/http";
import { ITodoList } from "./../models/todo-list.model";
import { useTypedSelector } from "./../use-typed-selector";
import { setAllLists } from "../actions/todo-list-actions";
import { useDispatch } from "react-redux";
import { TodoList } from "./list";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const lists = useTypedSelector((s) => s.todoList && s.todoList.lists);
  const dispatch = useDispatch();
  console.log(lists);
  React.useEffect(() => {
    get("http://localhost:8080/api/list/all").then((lists: ITodoList[]) => {
      dispatch(setAllLists(lists));
      console.log(lists);
    });
  }, []);

  return (
    <div>{lists && lists.map((l) => <TodoList list={l} key={l.id} />)}</div>
  );
}
