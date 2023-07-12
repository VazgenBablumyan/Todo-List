import React, { useState } from 'react'
import Todolist from './TodoList/Todolist';
import TodoInput from './TodoInput/TodoInput';
import TodoFooter from './TodoFooter/TodoFooter';


export default function Todos() {

    const [todos, setTodos] = useState([])
  return (
    <div>
        <TodoInput  todos ={todos} setTodos={setTodos}/>
        <Todolist todos ={todos} setTodos={setTodos}/>
        <TodoFooter  todos ={todos} setTodos={setTodos}/>
    </div>
  )
}
