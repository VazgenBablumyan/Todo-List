import { Checkbox, ListItem } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';

export default function Todolist({ todos, setTodos }) {

   console.log(todos)
    return todos.map((todo) => {
        return (
            <div>
                <ListItem id={todo.id}>
                    <Checkbox 
                        checked={todo.isCompleted} 
                        onClick={()=>{
                            setTodos(
                                [...todos],
                                todo.isCompleted = !todo.isCompleted
                            )
                        }} />
                    <span>{todo.name}</span>
                    <Button 
                        variant="outlined" 
                        onClick={()=> {
                        setTodos(todos.filter((e) => todo.id !== e.id))
                    }}> Delete
                    </Button>
                </ListItem>
            </div>
        )
    })

}
