import React, { useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <TodoInput  todos ={todos} setTodo={setTodos}/>
        <TodoList  todos ={todos} setTodo={setTodos}/>
        <TodoFooter  todos ={todos} setTodo={setTodos}/>
    </div>
  )
}
