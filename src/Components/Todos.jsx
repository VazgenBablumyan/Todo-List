import React, { useEffect, useReducer } from 'react'
import Todolist from './TodoList/Todolist';
import TodoInput from './TodoInput/TodoInput';
import TodoFooter from './TodoFooter/TodoFooter';
import styles from './Todo.module.css'
import { reducer } from './Reducer';

const setStorage = (todos) => localStorage.setItem("TODOS",JSON.stringify(todos))
const getStorage = () => JSON.parse(localStorage.getItem("TODOS"))



export default function Todos() {
const [todos, dispatch] = useReducer(reducer, getStorage() ?? [] )

useEffect(() => {
  setStorage(todos)
},[todos])

function handleAddTask(text){
  
  dispatch({type:"add to list",text})
}
function handleCheck(newTodo){
  dispatch({type:"check",  updatedTodo: newTodo})
}
function handleDelete(id){
  dispatch({type:"deleteItem",id})
}
function handleClear(){
  dispatch({type:"clear Complete"})
}
  return (
    <div className={styles.todos}>
        <TodoInput handleAddTask={handleAddTask} todos ={todos} />
        <Todolist handleDelete={handleDelete} handleCheck={handleCheck} todos ={todos} />
        <TodoFooter handleClear={handleClear} todos ={todos} />
    </div>
  )
}
