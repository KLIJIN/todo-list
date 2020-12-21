import React from "react";



const Todo = ({ setTodos, todos, todo}) => {
    const deleteHandler = () =>  {
        setTodos(todos.filter(el => el.id !== todo.id ))
    }

    const completeHandler = () => {
        console.log("Todo_completeHandler--",todos);
        setTodos(
            todos.map( (item) => {
                console.log("Todo_completeHandler--",todo);
                if (item.id === todo.id) {
                    return {
                        ...item, 
                        completed: !item.completed,
                    }
                }
                return item;
            })
        )
    }

    console.log("Todo_prerender", todo.text,  todos, todo);
    return (
        <div className="todo">
           <li className={`todo-item ${todo.completed ? "completed" : null}`}> {todo.text}</li>
           <button className="complete-btn" onClick={completeHandler} > <i className="fas fa-check" /> </button>
           <button className="trash-btn" 
                   onClick={deleteHandler}
           > 
           <i className="fas fa-trash" /> </button>
        </div>
    )
}

export default Todo;