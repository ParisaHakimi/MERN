import React from "react";

const Display = ({ tabs, currentIndex }) => {
  return (
    <div className="display">
      {tabs[currentIndex].content}
    </div>
  );
};

export default Display;
