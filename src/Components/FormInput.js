import React, { useState, useContext, useRef, useEffect } from "react";
import { TodoDataContext } from "./TodoDataProvider";

const FormInput = () => {
  const [todos, setTodos] = useContext(TodoDataContext);
    const [todoName, setTodoName] = useState("");
    const todoInput = useRef();

    
  const addTodo = (e) => {
    e.preventDefault();
      setTodos([...todos, { name: todoName, complete: false }]);
      setTodoName('')
      todoInput.current.focus()
  };
    
    useEffect(() => {
        todoInput.current.focus()
    })
   
  return (
    <form className="TodoForm" autoComplete="off" onSubmit={addTodo} >
      <input
        className="TodoInput"
        name="todos"
        type="text"
        id="todos"
        ref={todoInput}
        required placeholder="What do you need to do?"
        value={todoName}
        onChange={e => setTodoName(e.target.value)}
      />
      <button type="submit" className="TodoBtn">
        Create
      </button>
    </form>
  );
};

export default FormInput;
