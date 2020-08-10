import * as React from "react";
import { get } from "./../utils/http";
import { ITodoListDetail } from "./../models/todo-list.model";
import { useTypedSelector } from "./../use-typed-selector";
import { setAllLists } from "../actions/todo-list-actions";
import { useDispatch } from "react-redux";
import { TodoListDetail } from "./list-detail";
import { AddList } from "./add-list";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const lists = useTypedSelector((s) => s.todoList && s.todoList.listDetails);
  const dispatch = useDispatch();
  const controller = new AbortController(); // for cancelling long-polling

  console.log(lists);

  const poll = () => {
    get("http://localhost:8080/api/poll/lists", controller.signal)
      .then((v: ITodoListDetail[]) => {
        dispatch(setAllLists(v));
      })
      .catch(() => {});
  };

  React.useEffect(() => {
    get("http://localhost:8080/api/list/all").then(
      (lists: ITodoListDetail[]) => {
        dispatch(setAllLists(lists));
        console.log(lists);
      },
    );
  }, []);
  React.useEffect(() => {
    if (lists) {
      poll();
    }
    return () => controller.abort();
  });

  return (
    <div>
      <div className="row">
        {lists &&
          lists.map((l) => (
            <div key={l.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <TodoListDetail detail={l} />
            </div>
          ))}
        <AddList></AddList>
      </div>
    </div>
  );
}
