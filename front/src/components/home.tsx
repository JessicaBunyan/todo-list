import * as React from "react";
import { get } from "./../utils/http";
import { ITodoList } from "./../models/todo-list.model";
import { useTypedSelector } from "./../use-typed-selector";
import { setAllLists } from "../actions/todo-list-actions";
import { useDispatch } from "react-redux";
import { TodoList } from "./list";
import { TodoListDetail } from "./list-detail";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const lists = useTypedSelector((s) => s.todoList && s.todoList.listDetails);
  const dispatch = useDispatch();
  console.log(lists);
  React.useEffect(() => {
    get("http://localhost:8080/api/list/all").then((lists: ITodoList[]) => {
      dispatch(setAllLists(lists));
      console.log(lists);
    });
  }, []);

  return (
    <div>
      <div className="row">
        {lists &&
          lists.map((l) => (
            <div key={l.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <TodoListDetail detail={l} />
            </div>
          ))}
      </div>
    </div>
  );
}
