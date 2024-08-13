import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import ListContainer from './components/ListContainer';

function App() {
  const [todo,setTodo]=useState([]);

  function handleTodo(task){
    setTodo([...todo,task]);
  }

  function deleteTask(deltask){
   const filteredTodo= todo.filter((task)=>task!==deltask)
    setTodo(filteredTodo)
  }

  return (
    <div>
        <h1>TODO</h1>

        <InputContainer handleTodo={handleTodo}/>
        <ListContainer todo={todo} deleteTask={deleteTask}/>

    </div>
  )
}

export default App
