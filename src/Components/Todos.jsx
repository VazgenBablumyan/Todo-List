import React, { useReducer } from 'react'
import Todolist from './TodoList/Todolist';
import TodoInput from './TodoInput/TodoInput';
import TodoFooter from './TodoFooter/TodoFooter';
import styles from './Todo.module.css'
import { reducer } from './Reducer';

const getItem = JSON.parse(localStorage.getItem("TODOS"))
function setItem(todos=[]){
if (getItem){
localStorage.setItem("TODOS",JSON.stringify(todos))
  return []
}
localStorage.setItem("TODOS",JSON.stringify(getItem))
 return getItem
}


export default function Todos() {
const [todos, dispatch] = useReducer(reducer, setItem())

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
