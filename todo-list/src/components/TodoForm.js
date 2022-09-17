import { useState } from "react";

const TodoForm = ({ todos, setTodos, addTodo }) => {
  const [text, settext] = useState("");
  const formhandler = (e) => {
    e.preventDefault();
    if (text.trim !== "") {
      addTodo(text);
      settext("");
    }
  };
  return (
    <form onSubmit={formhandler}>
      <input
        type="text"
        placeholder="Todo text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
