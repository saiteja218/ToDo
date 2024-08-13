import React, { useState } from 'react'

const InputContainer = ({handleTodo}) => {
    const [task, setTask] = useState("");
    return (
        <div>
            <input type="text" value={task} onChange={(e) => (setTask(e.currentTarget.value))} />
            <button onClick={() => {
                console.log(task);
                handleTodo(task);
                setTask("");
                
            }
            }>Add</button>

        </div>
    )
}

export default InputContainer
