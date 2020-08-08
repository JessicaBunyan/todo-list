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
          <p>
            {props.detail.name}
            <span className="float-right">{props.detail.numItems}</span>
          </p>
        </h3>
      </div>
    </Link>
  );
}
