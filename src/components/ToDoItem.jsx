import React, { useState } from "react";

function ToDoItem(props) {

    const [isDone, setIsDone] = useState(false)
    const line = "line-through"

    function handleClick() {
        // isDone ? setIsDone(false) : setIsDone(true)
        setIsDone(prevValue => {
            return !prevValue
        })
    }

    return <div onClick={handleClick}>
        <li style={{textDecoration: isDone ? line : "none"}}>{props.item}</li>
    </div>
}

export default ToDoItem;