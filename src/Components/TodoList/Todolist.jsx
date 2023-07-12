import { Checkbox, ListItem } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import styles from "./Todolist.module.css"

export default function Todolist({todos, handleCheck, handleDelete}) {

    return todos.map((todo) => {
        return (
            <div key={todo.id} className={styles.todoLists}>
                <ListItem  className={styles.list}>
                    <Checkbox 
                        className={styles.check}
                        checked={todo.isCompleted} 
                        onChange={(e) => {
                            handleCheck({...todo, isCompleted:e.target.checked})
                        }}/>
                    <span className={styles.text}>{todo.name}</span>
                    <Button 
                        className={styles.deleteList}
                        variant="outlined" 
                        onClick={() => handleDelete(todo.id)}
                    > Delete
                    </Button>
                </ListItem>
            </div>
        )
    })

}
