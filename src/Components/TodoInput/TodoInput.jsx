import { Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'

export default function TodoInput({todos, setTodos}) {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        const newTodo = {
          id: uuidv4(),
          name: inputValue,
          isCompleted: false,
        };
  
        setTodos([...todos, newTodo]);
        setInputValue('');
      }
    };
  
    return (
      <div>
        <TextField
          label="Enter a new todo"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
    );
  }