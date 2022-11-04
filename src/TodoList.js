import React from "react";
import './todo_style.css';

const TodoList = (props) => {
const dtm = () => {
    props.onSelect(props.id)
};
  
  return (
    <>
      <div className="todo_style">
        <li>{props.id}</li>
        <li>{props.text}</li>
        <button onClick={dtm}>-</button>
      </div>
    </>
  );
};

export default TodoList;
