import React, { useState } from "react";
import ToDoItem from "./ToDoItem"
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  function handleClick(inputText, setInputText) {
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
        <InputArea
        onAdd={handleClick}
        />
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
