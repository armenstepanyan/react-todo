import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo, deleteCurrentTodo }) {
    return (
        todos.map(todo => {
            return <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteCurrentTodo={deleteCurrentTodo}/>
        })
    )
}
