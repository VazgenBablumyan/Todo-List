import { Button } from '@mui/material'
import React from 'react'

export default function TodoFooter({todos,setTodos}) {
    const comletedItemsCount = todos.filter((todo) => todo.isCompleted).length
    const clearCompleted = () =>  {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }
  return (
    <div>
        <span>{comletedItemsCount}/{todos.length} is Completed</span>
        <Button variant="outlined" onClick={clearCompleted}> Clear Completed
         </Button>
    </div>
  )
}
