import React from "react";

const Display = ({ todos }) => {
  return (
    <ul className="display-box">
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
};

export default Display;
