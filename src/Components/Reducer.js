import { v4 as uuidv4 } from 'uuid';

 export function reducer(todos,action){

    
    switch(action.type){
      case "add to list":
          return [...todos,
            {
              id: uuidv4(),
              name: action.text,
              isCompleted: false,
            }]   
        case "deleteItem":
          return todos.filter((todo) => todo.id !== action.id)
        case "clear Complete":
          return todos.filter((todo) => !todo.isCompleted)
        case "check":
          return todos.map((todo) => {  
            if(todo.id === action.updatedTodo.id) {
              return action.updatedTodo;
            }
            return todo;   })
          default:
           return todos
    }
  }