import React, { useState } from "react";

function App() {

  const [item, setItem] = useState("");

  function handleChange(event) {
    const newValue = event.target.value
    setItem(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
