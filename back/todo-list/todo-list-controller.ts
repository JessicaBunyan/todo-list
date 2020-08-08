import * as express from "express";
import { TodoList } from "./todo-list.model";

const lists: { [key: string]: TodoList } = {};

export const routes = function (router: express.Router) {
  router.post("/tournament/");
  // router.post('/tournament/new', makeValidateBody(ITournamentDB), newTournament)
  // router.get('/tournament/all', getAllTournaments)
  // router.get('/tournament/:id', getTournament)
  // router.get('/tournament/upcoming', upcomingTournaments)
};
