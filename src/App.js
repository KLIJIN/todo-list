import React, {useState} from "react"
import './App.css';
import Form from "./components/Form.js"
import TodoList from "./components/TodoList"


function App() {

  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);



  return (
    <div className="App">
      <header>
      <h1> todo List by KLIJIN</h1>
      
      </header>
      <Form setinputText={setinputText}  
            setTodos={setTodos}
            todos = {todos}
            inputText={inputText}
      />
  
      <div>
        <TodoList todos={todos} 
                  setTodos={setTodos}
        />
      </div>

    </div>
  );
}

export default App;
