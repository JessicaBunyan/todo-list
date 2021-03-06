import * as React from "react";
import { ITodoListItem, ITodoList } from "../models/todo-list.model";
import { patch } from "../utils/http";
import { useDispatch } from "react-redux";
import { setActiveList } from "../actions/todo-list-actions";

export interface ITodoListItemProps {
  index: number;
  listId: string;
  item: ITodoListItem;
}

export function TodoListItem(props: ITodoListItemProps) {
  const { item } = props;
  const dispatch = useDispatch();

  function onChange(itemId: string) {
    patch(
      `http://localhost:8080/api/list/${props.listId}/${itemId}/${!item.done}`,
    ).then((list: ITodoList) => {
      dispatch(setActiveList(list));
    });
  }

  return (
    <li className="item pr-2">
      <span className={item.done ? "strikethrough " : ""}>
        {props.index + 1}. {item.text}
      </span>
      <input
        className="float-right px-4 checkbox"
        type="checkbox"
        checked={item.done}
        onChange={() => onChange(item.id)}
      ></input>
    </li>
  );
}
