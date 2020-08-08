import { TodoList } from "./todo-list.model";
import { Router, Request, Response } from "express";

const startupState: { [key: string]: TodoList } = {
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

const lists: { [key: string]: TodoList } = startupState;

export const todoListRoutes = function (router: Router) {
  router.post("/list", saveList);
  router.get("/list/all", getAllLists);
  router.get("/list/:id", getList);
  router.patch("/list/:listId/:itemId/:state", updateItem);
};

async function saveList(req: Request, res: Response) {
  const list: TodoList = req.body;

  list.id = list.id || getId();
  lists[list.id] = req.body;

  return res.json(list);
}

async function getAllLists(req: Request, res: Response) {
  console.log("in get all lists");
  res.json(
    Object.values(lists).map((l) => ({
      id: l.id,
      name: l.name,
      numItems: l.items.length,
    })),
  );
}

async function getList(req: Request, res: Response) {
  console.log("in get list");
  const id = req.params.id;

  const list = lists[id];
  if (!list) {
    return res.status(404).send("List not found");
  }

  res.json(list);
}

async function updateItem(req: Request, res: Response) {
  const { listId, itemId, state } = req.params;

  const list = lists[listId];
  if (!list) {
    return res.status(400).json("Invalid update - list does not exist");
  }
  const item = list.items.find((i) => i.id == itemId);

  if (!item) {
    return res.status(400).send("Invalid update - list item does not exist");
  }

  item.done = state == "true";

  res.send(list);
}

function getId() {
  return Math.random().toString(36).substring(2, 9);
}
