import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './TodoInput.module.css'

export default function TodoInput({handleAddTask}) {
  const [inputValue, setInputValue] = useState("")

  
    return (
      <form className={styles.inputForm}
        onSubmit={(e) => {
          e.preventDefault()
          if(inputValue.trim() !== ""){
          handleAddTask(inputValue)
        }
          setInputValue("")
      }}
          >
        <TextField
          label="Enter a new todo"
          variant="outlined"
          value = {inputValue}
          className={styles.inputText}
          onChange = {(e)=> setInputValue(e.target.value)}
        />
        <Button variant="contained" 
          color="primary"
          type="submit"
          className={styles.inputButton} 
          >
          Add Todo
        </Button>
      </form>
    );
  }