import { Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React, { useReducer } from 'react'
import styles from '../TodoInput/TodoInput.module.css'

const initialState={
  inputValue:''
}
function reducer(state,action){
if(action.type==="inputChange"){
  return { ...state,
     inputValue: action.payload };
}else if(action.type==="add"){
  return { ...state, inputValue: '' };
}else {
  return state
}
}

export default function TodoInput({todos, setTodos}) {
  useReducer(reducer);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputValue } = state;
    const handleInputChange = (event) => {
     dispatch({
      type:"inputChange",
      payload:event.target.value,
     })
    };

    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        const newTodo = {
          id: uuidv4(),
          name: inputValue,
          isCompleted: false,
        };
  
        setTodos([...todos, newTodo]);
        dispatch({
        type:"add"
      })
      }
    };
  
    return (
      <div className={styles.container}>
        <TextField
         className={styles.inputField}
          label="Enter a new todo"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button className={styles.button}
         variant="contained" 
         color="primary" 
         onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
    );
  }