import TodoList from "./TodoList";
import { useState, useRef, useEffect } from 'react';

const LOCALSTORAGE_KEY = 'todoApp';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    if (data) {
      setTodos(JSON.parse(data))
    }
  }, []) // calling only once

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos))
  }, [todos]) // called any time when 'todos' is changes

  function toggleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(item => item.id === id);
    todo.isCompleted = !todo.isCompleted;
    
    setTodos(newTodos);
    console.log(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if (!name) {
      return;
    }
    todoNameRef.current.value = null;
    setTodos(prevTodos => {
      return [...prevTodos, { id: Date.now(), name: name, isCompleted: false }]
    })
  }

  function handleClear(){
    const newTodos = todos.filter(todo => !todo.isCompleted);
    setTodos(newTodos)
  }

  function deleteCurrentTodo(id){
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  } 

 
  return (
   <>
     <TodoList todos={todos} toggleTodo={toggleTodo} deleteCurrentTodo={deleteCurrentTodo}/>
     <input type="text" ref={todoNameRef} />  
     <button onClick={handleAddTodo}>Add</button>
     <button onClick={handleClear}>Clear Completed</button>
     <p>{todos.filter(todo => !todo.isCompleted).length} left</p>
    </>
  );
}

export default App;
