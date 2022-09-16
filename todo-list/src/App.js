import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <Display todos={todos} />
    </div>
  );
}

export default App;
