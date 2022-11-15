import React, { useState } from "react";

const ListItem = ({ todo, id, checkComplete,handleEditTodos }) => {
  console.log(todo);
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };
  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          value={editValue}
          name="editValue"
          checked={todo.complete}
          className="TodoInput"
          onChange={(e) => setEditValue(e.target.value)}
        />

        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            className="TodoInput"
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>

        <button
          disabled={todo.complete}
          className="TodoEdit"
          onClick={handleOnEdit}
        >
          Edit
        </button>
      </li>
    );
  }
};

export default ListItem;
