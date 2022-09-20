import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>welcome</h1>
      <p>
        <Link to="/4">got to the number page</Link>
        <Link to="/hello">got to the Hello page</Link>
      </p>
    </>
  );
};

export default Home;
