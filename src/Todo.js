import React from 'react'

export default function Todo({ todo, toggleTodo, deleteCurrentTodo }) {

    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    function handleDelete(){
        deleteCurrentTodo(todo.id)
    }

    return (
        <div>
           <label>
               <input type="checkbox" checked={todo.isCompleted} onChange={handleTodoClick}/>
           {todo.name}
           </label>
           <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
