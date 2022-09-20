import React from "react";
import { useParams, Link } from "react-router-dom";

const ParamsComponent = () => {
  const { word, color, bgColor } = useParams();
  return (
    <div>
      {isNaN(word) ? (
        <p style={color ? { color: color, backgroundColor: bgColor } : null}>
          this is a word: {word}
        </p>
      ) : (
        <p>this is a number: {word}</p>
      )}
    </div>
  );
};

export default ParamsComponent;
