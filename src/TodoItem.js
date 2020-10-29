/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useSetRecoilState } from "recoil";

import { deleteTodoSelector, toggleTodoSelector } from "./TodoAtoms";

const container = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding: 20px;
  & + & {
    margin-top: 10px;
  }
`;

const deleteButton = css`
  width: 50px;
  height: 30px;
  background-color: lightgrey;
  border: none;
  border-radius: 5px;
  margin-left: auto;
`;

const Text = ({ isComplete, children }) => (
  <span
    css={css`
      text-decoration: ${isComplete ? "line-through" : "none"};
    `}
  >
    {children}
  </span>
);

const TodoItem = ({ id, text, isComplete }) => {
  const deleteTodo = useSetRecoilState(deleteTodoSelector);
  const toggleTodo = useSetRecoilState(toggleTodoSelector);

  return (
    <div css={container} onClick={() => toggleTodo(id)}>
      <Text isComplete={isComplete}>{text}</Text>
      <button css={deleteButton} onClick={() => deleteTodo(id)}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
