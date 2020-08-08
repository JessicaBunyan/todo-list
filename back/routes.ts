import { Router } from "express";
import { todoListRoutes } from "./todo-list/todo-list-controller";

const router = Router();

var longPoll = require("express-longpoll")(router);

todoListRoutes(router, longPoll);

export default router;
