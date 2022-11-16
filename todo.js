/* eslint-disable no-undef */
const list1 = () => {
  all = [];
  const a = (todoItem) => {
    all.push(todoItem);
  };
  const b = (index) => {
    all[index].completed = true;
  };

  let day = new Date().toLocaleDateString("en-CA");
  // let day = new Date().toISOString().split("T")[0];

  const c = () => {
    return all.filter((todo) => {
      return todo.dueDate < day;
    });
  };

  const d = () => {
    return all.filter((todo) => {
      return todo.dueDate === day;
    });
  };

  const e = () => {
    return all.filter((todo) => {
      return todo.dueDate > day;
    });
  };

  const tf = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == day ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    a,
    b,
    c,
    d,
    e,
    tf,
  };
};

module.exports = list1;

