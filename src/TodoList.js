/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useRecoilValue } from "recoil";

import { todoListState } from "./TodoAtoms";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);

  return (
    <div css={{ width: "100%", marginTop: 10 }}>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          isComplete={item.isComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
