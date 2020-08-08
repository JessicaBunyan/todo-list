import { TodoList } from "./todo-list.model";
export const mockData: { [key: string]: TodoList } = {
  tasks: {
    id: "tasks",
    name: "Tech Challenge Core",
    items: [
      {
        id: "REQ1",
        text: "Server-side Persistence",
        done: true,
      },
      {
        id: "REQ2",
        text: "Real time data syncing",
        done: true,
      },
      {
        id: "REQ3",
        text: "Users can jump in halfway through a session",
        done: true,
      },
      {
        id: "REQ4",
        text: "Resposiveness: Desktop -> Mobile",
        done: true,
      },
      {
        id: "REQ5",
        text: "Unit Tests which prove data integrity",
        done: true,
      },
    ],
  },
  c: {
    id: "c",
    name: "Tech Challenge Extensions",
    items: [
      {
        id: "EXT1",
        text: "Connect backend to database",
        done: false,
      },
      {
        id: "EXT2",
        text: "Use Jest snapshot testing on front end",
        done: true,
      },
      {
        id: "EXT3",
        text: "Use websockets instead of long-polling for data syncing",
        done: false,
      },
      {
        id: "EXT4",
        text: "Increase test coverage %",
        done: false,
      },
      {
        id: "EXT5",
        text: "Add edit functionality for lists & items",
        done: false,
      },
    ],
  },
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
};
