jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useTypedSelector: jest.fn().mockReturnValue({ todoList: null }),
  useSelector: jest.fn().mockReturnValue({ todoList: null }),
}));

jest.mock("react-router", () => ({
  useParams: jest.fn().mockReturnValue({ id: "123" }),
  useHistory: jest.fn(),
}));

// jest.mock("react-router-dom", () => ({
//   useParams: jest.fn().mockReturnValue({ id: "123" }),
// }));

import React from "react";
import renderer from "react-test-renderer";
import { ITodoListDetail, ITodoList } from "../models/todo-list.model";
import { TodoList } from "../components/list";

const testList: ITodoList = {
  id: "foo",
  name: "Jessica test",
  items: [
    {
      id: "z",
      text: "Apples",
      done: false,
    },
    {
      id: "y",
      text: "Bananas",
      done: true,
    },
    {
      id: "x",
      text: "Carrots",
      done: true,
    },
    {
      id: "w",
      text: "Durians",
      done: true,
    },
    {
      id: "v",
      text: "Eggs",
      done: true,
    },
  ],
};

declare var AbortController;

// test disabled due to crash caused by AbortController not being define.
xit("renders correctly", () => {
  const tree = renderer.create(<TodoList list={testList} />).toJSON();
  expect(tree).toMatchSnapshot();
});
