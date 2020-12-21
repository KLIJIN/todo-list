import React from "react"

const Form =({setinputText, setTodos, todos, inputText }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setinputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault(); //отменяем перезагрузку
        //console.log("Form__submitHandler",e.target.value)
        setTodos([...todos, 
                    {
                    text: inputText, 
                    id: Math.floor(Math.random() * 1000),
                    completed: false
                    }
        ]);
        setinputText(''); //обнуляем поле инпута
    }

    //console.log("[Form_preRender]", todos)


    return (
        <form>
            <input onChange={inputTextHandler} type="text" className= "todo-input" value={inputText} placeholder="введи в меня что-то" />
            <button onClick={submitHandler}  className="todo-button" type="submit" >  <i className="fas fa-plus-square"></i></button> {/* сюда возможно онклик и отменить действие по умолчанию*/}
            <div className="select">
                <select name="todos" className="filter-todo" >
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;