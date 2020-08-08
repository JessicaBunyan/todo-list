import React from "react";
import renderer from "react-test-renderer";
import { TodoListItem } from "../components/list-item";
import { SubmittableInput } from "../components/input";

it("renders correctly when checked", () => {
  const tree = renderer
    .create(<SubmittableInput placeholder="placeholder" onSubmit={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
