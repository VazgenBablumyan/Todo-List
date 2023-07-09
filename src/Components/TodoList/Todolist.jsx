import { ListItem } from '@mui/material'
import React from 'react'
import CheckListItem from './CheckListItem'
import EditListItem from './EditListItem'
import DeleteListItem from './DeleteListItem'

export default function Todolist({todos,setTodos}) {
    todos.map((todo) =>{
       return (
    <div>
        <ListItem >
            <CheckListItem checked={todo.checked}/>
            <EditListItem name={todo.name}/>
            <DeleteListItem todo = {todo}/>
        </ListItem>
    </div>
  ) 
    })
  
}
