import React from "react";
import FormInput from "./FormInput";
import List from "./List";
import TodoFooter from "./TodoFooter";
import { TodoDataProvider } from "./TodoDataProvider";

const TodoList = () => {
  return (
    <TodoDataProvider>
      <div className="todobox">
        <h1>Let's get busy!</h1>

        <FormInput />
        <List />
        <TodoFooter />
      </div>
    </TodoDataProvider>
  );
};

export default TodoList;
