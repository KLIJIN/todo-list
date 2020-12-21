import React, {useState, useEffect} from "react"
import './App.css';
import Form from "./components/Form.js"
import TodoList from "./components/TodoList"


function App() {

  useEffect( () => {getLocalTodos()}, [] )
    //state staff
  const [inputText, setinputText] = useState("");
  const [status, setStatus] = useState("all");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => { 
    //тут возникнет предупреждение т.к. по "концепции" нжно 
    //всё что идет ниже пихать в функцию внутри  useEffect( ()=> {filterHandler(сюда) но это не очень красиво. 
      switch(status) {
        case "completed":
          setFilteredTodos(todos.filter( (todo)  => todo.completed === true )) 
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo)  => todo.completed === false )) 
          break;
        default:
          setFilteredTodos(todos) 
          break;
      }
  }

  useEffect( ()=> { //то есть мы привязываем useEffect к изменениям todos, status после рендера страницы
      filterHandler()
      saveLocalTodos()
    }, [todos, status] )



const saveLocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos) )
}

const getLocalTodos = () =>{
  if ( localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]) )
  }else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal)
  }
}



  return (
    <div className="App">
      <header>
      <h1> todo List by KLIJIN </h1>
      
      </header>
      <Form setinputText={setinputText}  
            setTodos={setTodos}
            todos = {todos}
            inputText={inputText}
            setStatus={setStatus}
            filteredTodos = {filteredTodos}

      />
  
      <div>
        <TodoList todos={todos} 
                  setTodos={setTodos}
                  setFilteredTodos={setFilteredTodos}
                  filteredTodos = {filteredTodos}
                  
        />
      </div>

    </div>
  );
}

export default App;
