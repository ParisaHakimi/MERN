import React from "react";

const Display = ({ todos, completed, deleteTodo }) => {
  return (
    <ul className="display-box">
      {todos.map((todo, i) => (
        <li key={i}>
          <div className="text" onClick={() => completed(i)}>
            <span className={todo.isComplete ? "todoDone" : null}>
              {todo.todotext}
            </span>
            <i
              className={
                todo.isComplete
                  ? "todo-Completed fa fa-check-square-o"
                  : "fa fa-check-square-o"
              }
              aria-hidden="true"
            ></i>
          </div>
          <div className="icon-container">
            <i
              className="fa fa-times-circle-o"
              aria-hidden="true"
              onClick={() => deleteTodo(i)}
            ></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Display;
