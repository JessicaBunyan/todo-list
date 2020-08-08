import React from "react";
import renderer from "react-test-renderer";
import { TodoListItem } from "../components/list-item";
import { ITodoListDetail } from "./../models/todo-list.model";
import { TodoListDetail } from "../components/list-detail";
import { MemoryRouter } from "react-router-dom";

const testList: ITodoListDetail = {
  id: "foo",
  name: "Jessica test",
  numItems: 4,
  numCompletedItems: 3,
};

it("renders correctly when checked", () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={["url"]}>
        <TodoListDetail detail={testList} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
