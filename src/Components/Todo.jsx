import React, { useState } from 'react'

export default function Todo() {
    const [todo, setTodo] = useState([])
  return (
    <div>
        <TodoInput  todo ={todo} setTodo={setTodo}/>
        <TodoList  todo ={todo} setTodo={setTodo}/>
        <TodoFooter  todo ={todo} setTodo={setTodo}/>
    </div>
  )
}
