import React from "react";
import { RecoilRoot } from "recoil";
import PageTemplate from "./PageTemplate";
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";

function App() {
  return (
    <RecoilRoot>
      <PageTemplate>
        <TodoCreator />
        <TodoList />
      </PageTemplate>
    </RecoilRoot>
  );
}

export default App;
