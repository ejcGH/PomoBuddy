import React, { useContext, useState } from "react";
import { TodoDataContext } from "./TodoDataProvider";

const TodoFooter = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(TodoDataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

    
    const newTodosComplete = () => {
        return todos.filter(todo => todo.complete === false)
    }
  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h5><em>Your list seems a bit empty</em></h5>
      ) : (
        <div className="row">
          <label>
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>You have {newTodosComplete().length} remaining</p>
          <button id="delete" className="TodoDel" onClick={deleteTodo}>
            {" "}
            Delete{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default TodoFooter;
