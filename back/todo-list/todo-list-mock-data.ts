import { TodoList } from "./todo-list.model";
export const mockData: { [key: string]: TodoList } = {
  a: {
    id: "a",
    name: "Shopping",
    items: [
      {
        id: "z",
        text: "Apples",
        done: false,
      },
      {
        id: "y",
        text: "Bananas",
        done: false,
      },
      {
        id: "x",
        text: "Carrots",
        done: true,
      },
    ],
  },
  b: {
    id: "b",
    name: "Chores",
    items: [
      {
        id: "p",
        text: "Hoovering",
        done: true,
      },
      {
        id: "q",
        text: "Dusting",
        done: false,
      },
      {
        id: "o",
        text: "Gardening",
        done: true,
      },
    ],
  },
  c: {
    id: "c",
    name: "Chores copy",
    items: [
      {
        id: "p",
        text: "Hoovering",
        done: true,
      },
      {
        id: "q",
        text: "Dusting",
        done: false,
      },
      {
        id: "o",
        text: "Gardening",
        done: true,
      },
    ],
  },
  d: {
    id: "d",
    name: "Chores copy 2",
    items: [
      {
        id: "p",
        text: "Hoovering",
        done: true,
      },
      {
        id: "q",
        text: "Dusting",
        done: false,
      },
      {
        id: "o",
        text: "Gardening",
        done: true,
      },
    ],
  },
};
