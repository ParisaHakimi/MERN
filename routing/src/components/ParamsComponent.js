import React from "react";
import { useParams } from "react-router-dom";

const ParamsComponent = (props) => {
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
