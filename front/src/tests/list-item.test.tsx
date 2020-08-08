jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

// jest.mock("react-router", () => ({
//   useParams: jest.fn().mockReturnValue({ id: "123" }),
// }));
// jest.mock("react-router-dom", () => ({
//   useParams: jest.fn().mockReturnValue({ id: "123" }),
// }));

import React from "react";
import renderer from "react-test-renderer";
import { TodoListItem } from "../components/list-item";
import { ITodoList } from "../models/todo-list.model";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const testList: ITodoList = {
  id: "foo",
  name: "Jessica test",
  items: [
    { id: "fsd", text: "this is an item", done: false },
    { id: "ffdsfds", text: "this is also an item", done: false },
  ],
};

it("renders correctly when checked", () => {
  const tree = renderer
    .create(
      <TodoListItem item={testList.items[0]} listId={testList.id} index={0} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
