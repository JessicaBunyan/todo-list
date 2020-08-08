import * as React from "react";
import { SubmittableInput } from "./input";
import { post } from "../utils/http";
import { ITodoList } from "../models/todo-list.model";
import { useHistory } from "react-router";
import { ITodoListItem } from "./../models/todo-list.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export interface IAddListProps {}

export function AddList(props: IAddListProps) {
  const [active, setActive] = React.useState(false);
  const history = useHistory();

  const onSubmit = (val: string) => {
    const list: ITodoList = {
      name: val,
      items: [],
    };
    post("http://localhost:8080/api/list", list).then((l: ITodoList) => {
      history.push("/list/" + l.id);
    });
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div
        className={active ? "card" : "card clickable"}
        onClick={() => setActive(true)}
      >
        {active && (
          <div className="mt-6 clickable">
            <SubmittableInput
              placeholder="New List Name..."
              onSubmit={onSubmit}
            ></SubmittableInput>
          </div>
        )}

        {!active && (
          <div className="text-center mt-4">
            <h3>New</h3>
            <FontAwesomeIcon className="mega" icon={faPlus}></FontAwesomeIcon>
          </div>
        )}
      </div>
    </div>
  );
}
