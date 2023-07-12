import { Button } from '@mui/material'
import React from 'react'
import styles from "./TodoFooter.module.css"

export default function TodoFooter({todos, handleClear}) {
    const comletedItemsCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.footer}>
        <span 
          className={styles.text} 
          >{comletedItemsCount}/{todos.length} is Completed
        </span>
        <Button 
          className={styles.button}
          variant="outlined" 
          onClick={() => handleClear() }
          > Clear Completed
         </Button>
    </div>
  )
}
