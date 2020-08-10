import { TodoList } from "./todo-list.model";
import { Router, Request, Response } from "express";
import { TodoListService } from "./todo-list.service";

const listService = TodoListService.getInstance();

export const todoListRoutes = function (router: Router, longPoll) {
  longPoll.create("/poll/list");
  longPoll.create("/poll/lists");
  router.post("/list", saveList);
  router.get("/list/all", getAllLists);
  router.get("/list/:id", getList);
  router.patch("/list/:listId/:itemId/:state", updateItem);
  router.delete("/list/:id", deleteList);

  async function saveList(req: Request, res: Response) {
    const list: TodoList = req.body;

    const saved = await listService.saveList(list);

    longPoll.publish("/poll/list", saved);

    const allLists = await listService.getAllListDetails();
    longPoll.publish("/poll/lists", allLists);
    return res.json(list);
  }

  async function getAllLists(req: Request, res: Response) {
    const list = await listService.getAllListDetails();

    res.json(list);
  }

  async function getList(req: Request, res: Response) {
    const id = req.params.id;

    const list = await listService.getList(id);
    if (!list) {
      return res.status(404).send("List not found");
    }

    res.json(list);
  }

  async function deleteList(req: Request, res: Response) {
    const id = req.params.id;

    listService
      .deleteList(id)
      .then(async () => {
        const allLists = await listService.getAllListDetails();
        longPoll.publish("/poll/lists", allLists);
        res.json({});
      })
      .catch(() => {
        res.status(400).send();
      });
  }

  async function updateItem(req: Request, res: Response) {
    const { listId, itemId, state } = req.params;

    try {
      const list = await listService.updateListItemState(
        listId,
        itemId,
        state == "true",
      );

      longPoll.publish("/poll/list", list);
      const allLists = await listService.getAllListDetails();
      longPoll.publish("/poll/lists", allLists);
      res.send(list);
    } catch (e) {
      res.status(400).send(e);
    }
  }
};
