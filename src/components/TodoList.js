import React from "react";
import Todo from "./Todo.js"


const TodoList = ({todos, setTodos}) => {
    console.log("TodoList:", todos)
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
            
                {todos.map( (todo) => (
                    <Todo key={todo.id}
                          text={todo.text}
                          todo={todo}
                          todos = {todos}
                          setTodos={setTodos}
                    />
               )) 
               }
                
            </ul>
        </div>

    )
}

export default TodoList;