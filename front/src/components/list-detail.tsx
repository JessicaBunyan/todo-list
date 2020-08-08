import * as React from "react";
import { ITodoList } from "../models/todo-list.model";
import { ITodoListDetail } from "./../models/todo-list.model";
import { Link } from "react-router-dom";

export interface IListCardProps {
  detail: ITodoListDetail;
}

export function TodoListDetail(props: IListCardProps) {
  return (
    <Link to={"/list/" + props.detail.id}>
      <div className="card">
        <h3 className="">
          <p>{props.detail.name}</p>
          <p className="completed-count">
            {props.detail.numCompletedItems}/{props.detail.numItems}
          </p>
        </h3>
      </div>
    </Link>
  );
}
