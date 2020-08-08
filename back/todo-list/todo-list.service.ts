import { TodoList } from "./todo-list.model";
import { mockData } from "./todo-list-mock-data";

export class TodoListService {
  private static instance: TodoListService;
  private lists: { [key: string]: TodoList } = mockData;

  public static getInstance() {
    if (TodoListService.instance) {
      return TodoListService.instance;
    }

    TodoListService.instance = new TodoListService();
    return TodoListService.instance;
  }

  public reset() {
    this.lists = {};
  }

  public async saveList(list: TodoList) {
    list.id = list.id || getId();
    this.lists[list.id] = list;

    return list;
  }

  public async deleteList(id: string) {
    const list = this.lists[id];
    if (!list) {
      return Promise.reject("No Such List");
    }

    this.lists[id] = undefined;

    return Promise.resolve("OK");
  }

  public async getAllListDetails() {
    const val = Object.values(this.lists)
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
    const val = this.lists[id];

    return Promise.resolve(val);
  }

  public updateListItemState(listId: string, itemId: string, state: boolean) {
    const list = this.lists[listId];

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
