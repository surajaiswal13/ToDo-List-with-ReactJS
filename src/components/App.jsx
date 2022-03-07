import React, { useState } from "react";
import ToDoItem from "./ToDoItem"

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value
    setInputText(newValue);
  }

  function handleClick() {
    setItems(prevItems => [...prevItems, inputText]);
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
          return index !== id
        }
      )
    })
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
          {items.map(
            (toDoItem, index) => <ToDoItem key={index} id={index} item = {toDoItem} onChecked={deleteItem} />
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
