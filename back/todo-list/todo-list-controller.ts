import { TodoList } from "./todo-list.model";
import { Router, Request, Response } from "express";

const lists: { [key: string]: TodoList } = {};

export const routes = function (router: Router) {
  router.post("/list", saveList);
  router.get("/list/:id", getList);
  router.patch("/list/:listId/:itemId/:state", updateItem);
};

async function saveList(req: Request, res: Response) {
  const list: TodoList = req.body;

  list.id = list.id || getId();
  lists[list.id] = req.body;

  return res.send(list);
}

async function getList(req: Request, res: Response) {
  const id = req.params.id;

  const list = lists[id];
  if (!list) {
    return res.status(404).send("List not found");
  }
}

async function updateItem(req: Request, res: Response) {
  const { listId, itemId, state } = req.params;

  const list = lists[listId];
  if (!list) {
    return res.status(400).send("Invalid update - list does not exist");
  }
  const item = list.items.find((i) => i.id == itemId);

  if (!item) {
    return res.status(400).send("Invalid update - list item does not exist");
  }

  item.done = Boolean(state);

  res.send(item);
}

function getId() {
  return Math.random().toString(36).substring(2, 9);
}
