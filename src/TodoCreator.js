/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { addTodoSelector } from "./TodoAtoms";

const container = css`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  border: none;
`;

const inputStyle = css`
  width: 100%;
  height: 30px;
  padding: 0 4px 0 4px;
`;

const buttonStyle = css`
  border: none;
  background-color: skyblue;
  color: white;
  border-radius: 5px;
  margin-left: 30px;
  width: 80px;
`;

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useSetRecoilState(addTodoSelector);

  const addItem = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div css={container}>
      <input
        css={inputStyle}
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <button css={buttonStyle} onClick={addItem}>
        추가
      </button>
    </div>
  );
};

export default React.memo(TodoItemCreator);
