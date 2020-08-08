import { expect, assert } from "chai";
import { TodoListService } from "./../todo-list/todo-list.service";
import { TodoList } from "./../todo-list/todo-list.model";

describe("TodoListService", () => {
  beforeEach(() => {
    TodoListService.getInstance().reset();
  });

  it("should save list with ID", async () => {
    const s = TodoListService.getInstance();
    const savedList = await s.saveList({ name: "foo", items: [] });

    expect(savedList.id).to.be.not.null.and.to.be.not.undefined;
  });

  it("should store and retreive a new list", async () => {
    const s = TodoListService.getInstance();

    const savedList = await s.saveList({
      name: "foo",
      items: [
        { id: "a", text: "foo", done: false },
        { id: "b", text: "bar", done: true },
      ],
    });
    const retreivedList = await s.getList(savedList.id);

    expect(retreivedList.name).to.equal(savedList.name);
    expect(retreivedList.items).to.deep.equal(savedList.items);
  });

  it("should store an new list and retrieve it in list of lists", async () => {
    const s = TodoListService.getInstance();

    const savedList = await s.saveList({
      name: "foo",
      items: [
        { id: "a", text: "foo", done: false },
        { id: "b", text: "bar", done: true },
      ],
    });
    const retreivedList = await s.getList(savedList.id);

    const allLists = await s.getAllListDetails();
    const allListIds = allLists.map((l) => l.id);

    expect(allListIds).to.include(savedList.id);
  });

  it("should update a list item ", async () => {
    const s = TodoListService.getInstance();

    const savedList = await s.saveList({
      name: "foo",
      items: [
        { id: "a", text: "foo", done: false },
        { id: "b", text: "bar", done: true },
      ],
    });
    const updated = await s.updateListItemState(
      savedList.id,
      savedList.items[0].id,
      true,
    );

    expect(updated.items[0].done).to.equal(true);
  });
  it("should update a list item and reflect that when retriving list", async () => {
    const s = TodoListService.getInstance();

    const savedList = await s.saveList({
      name: "foo",
      items: [
        { id: "a", text: "foo", done: false },
        { id: "b", text: "bar", done: true },
      ],
    });
    const updated = await s.updateListItemState(
      savedList.id,
      savedList.items[0].id,
      true,
    );

    const retreivedList = await s.getList(savedList.id);

    expect(retreivedList.items[0].done).to.equal(true);
  });
});
