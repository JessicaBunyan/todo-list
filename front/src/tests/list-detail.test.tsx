import React from "react";
import renderer from "react-test-renderer";
import { TodoListItem } from "../components/list-item";
import { ITodoListDetail } from "./../models/todo-list.model";
import { TodoListDetail } from "../components/list-detail";

const testList: ITodoListDetail = {
  id: "foo",
  name: "Jessica test",
  numItems: 4,
  numCompletedItems: 3,
};

it("renders correctly when checked", () => {
  const tree = renderer.create(<TodoListDetail detail={testList} />).toJSON();
  expect(tree).toMatchSnapshot();
});
