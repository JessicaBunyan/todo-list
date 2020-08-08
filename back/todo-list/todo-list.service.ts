import { TodoList } from "./todo-list.model";
import { promises } from "dns";
import { mockData } from "./todo-list-mock-data";

const lists: { [key: string]: TodoList } = mockData;

export class TodoListService {
  private static instance: TodoListService;

  public static getInstance() {
    if (TodoListService.instance) {
      return TodoListService.instance;
    }

    TodoListService.instance = new TodoListService();
    return TodoListService.instance;
  }

  public async saveList(list: TodoList) {
    list.id = list.id || getId();
    lists[list.id] = list;

    return list;
  }

  public async deleteList(id: string) {
    const list = lists[id];
    if (!list) {
      return Promise.reject("No Such List");
    }

    lists[id] = undefined;

    return Promise.resolve("OK");
  }

  public async getAllListDetails() {
    const val = Object.values(lists)
      .filter((l) => l)
      .map((l) => ({
        id: l.id,
        name: l.name,
        numItems: l.items.length,
        numCompletedItems: l.items.filter((i) => i.done).length,
      }));
    return Promise.resolve(val);
  }

  public async getList(id: string) {
    const val = lists[id];

    return Promise.resolve(val);
  }

  public updateListItemState(listId: string, itemId: string, state: boolean) {
    const list = lists[listId];

    if (!list) {
      return Promise.reject("No such list");
    }
    const item = list.items.find((i) => i.id == itemId);

    if (!item) {
      return Promise.reject("Invalid update - list item does not exist");
    }

    item.done = state;

    return Promise.resolve(list);
  }
}

function getId() {
  return Math.random().toString(36).substring(2, 9);
}
