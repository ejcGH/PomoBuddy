import React, { useContext } from "react";
import ListItem from "./ListItem";
import { TodoDataContext } from "./TodoDataProvider";

const List = () => {
    const [todos, setTodos] = useContext(TodoDataContext);
    
    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

        console.log(todos);
        return (
            <ul>
                {/* <ListItem />
      <ListItem />
      <ListItem /> */}
                {todos.map((todo, index) =>
                    <ListItem todo={todo} key={index} id={index} checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
                )}
            </ul>
        );
    };

export default List
