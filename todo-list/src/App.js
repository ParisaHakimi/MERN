import { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todotext) => {
    const newTodos = [...todos];
    newTodos.unshift({ todotext, isComplete: false });
    setTodos(newTodos);
    localStorage.setItem("MY_TODOS", JSON.stringify(newTodos));
  };
  const completed = (i) => {
    const newTodos = [...todos];
    newTodos[i].isComplete = !newTodos[i].isComplete;
    setTodos(newTodos);
    localStorage.setItem("MY_TODOS", JSON.stringify(newTodos));
  };
  const deleteTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
    localStorage.setItem("MY_TODOS", JSON.stringify(newTodos));
  };
  useEffect(() => {
    const data = localStorage.getItem("MY_TODOS");
    if (data !== null) {
      setTodos(JSON.parse(data));
    }
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} addTodo={addTodo} />
      <Display todos={todos} completed={completed} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
