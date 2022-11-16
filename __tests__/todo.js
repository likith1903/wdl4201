/* eslint-disable no-undef */
const list1 = require("../todo");
let day = new Date().toLocaleDateString("en-CA");

const { all, b, a, c, d, e } = list1();

describe("test of todo list", () => {
  beforeAll(() => {
    a({
      title: "codechef contest completion",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("we should add a new todo to the list", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    a({
      title: "coding is life",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("todo should be marked as complete", () => {
    expect(all[0].completed).toBe(false);
    b(0);
    expect(all[0].completed).toBe(true);
  });

  test("overdue todos should be mentoined", () => {
    let list2 = c();

    expect(
      list2.every((todo) => {
        return todo.dueDate < day;
      })
    ).toBe(true);
  });

  test("all todos that are due should be noted", () => {
    let list2 = d();

    expect(
      list2.every((todo) => {
        return todo.dueDate === day;
      })
    ).toBe(true);
  });

  test("all todos which are due should be retrieved", () => {
    let list2 = e();

    expect(
      list2.every((todo) => {
        return todo.dueDate > day;
      })
    ).toBe(true);
  });
});
