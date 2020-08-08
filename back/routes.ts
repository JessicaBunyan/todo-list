import { Router } from "express";
import { todoListRoutes } from "./todo-list/todo-list-controller";

const router = Router();

todoListRoutes(router);

export default router;
