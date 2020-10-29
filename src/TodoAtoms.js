import { atom, selector } from "recoil";

let id = 0;
function getId() {
  return id++;
}

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const addTodoSelector = selector({
  key: "addTodoSelector",
  set: ({ get, set }, text) => {
    const nextTodo = [
      ...get(todoListState),
      { id: getId(), text, isComplete: false },
    ];
    set(todoListState, nextTodo);
  },
});

export const deleteTodoSelector = selector({
  key: "deleteTodoSelector",
  set: ({ get, set }, id) => {
    const filteredTodo = get(todoListState).filter((item) => item.id !== id);
    set(todoListState, filteredTodo);
  },
});

export const toggleTodoSelector = selector({
  key: "toggleTodoSelector",
  set: ({ get, set }, id) => {
    const toggledTodo = get(todoListState).map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    set(todoListState, toggledTodo);
  },
});
