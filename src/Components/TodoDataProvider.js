import React, { useState, useEffect, createContext } from "react";

export const TodoDataContext = createContext();

export const TodoDataProvider = (props) => {

    const [todos, setTodos] = useState([])

    
    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem("todoStore"))
        if(todoStore) setTodos(todoStore)
    }, [])
    useEffect(() => {
        localStorage.setItem("todoStore", JSON.stringify(todos))
    }, [todos])

    
    return (
        
        <TodoDataContext.Provider value={[todos,setTodos]}>
            {props.children}
        
        </TodoDataContext.Provider>
    )
};
