import React, { useState } from "react";
import TodoList from "./TodoList";
import "./index.css";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
   
  const deleteItem = (id) => {
   console.log(id)

   setItems((oldItems)=>{
    return oldItems.filter((arrElem, index)=>{
      return index !==id;
    })
   })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> Todo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={inputList}
            onChange={itemEvent}
          ></input>
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemval, index) => {
              return <TodoList 
              key={index} 
              id={index} 
              text={itemval} 
              onSelect = {deleteItem}
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
