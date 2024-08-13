import React from 'react'

const ListContainer = ({todo, deleteTask}) => {
  return (
    <div>
       { todo.map((task,index)=>{
               return(
               <li  key={index}>{task}
               <button onClick={()=>deleteTask(task)}>Done</button>
               </li>
            );
        })}
      
    </div>
  )
}

export default ListContainer
