import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Author from "./Author";

const HomePage = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allAuthors")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/deletAuthor/${id}`)
      .then((res) => {
        console.log("success deleting author", res);
      })
      .catch((err) => console.log(err));
  };

  const menuItems = [...new Set(authors.map((Val) => Val.petType))];

  const filterItem = (curcat) => {
    const newItem = authors.filter((newVal) => {
      return newVal.petType === curcat;
      // comparing petType for displaying data
    });
    setAuthors(newItem);
  };

  return (
    <div className="main w-50 mx-auto">
      <Link to="/create-author">Add an author</Link>
      <p className="">We have quotes by:</p>

      <ul className="author-table">
        <div className="author-title-container d-flex justify-content-around">
          <p className="">Author</p>
          <p>Actions available</p>
          <div className="d-flex justify-content-center">
            {menuItems.map((Val, id) => {
              return (
                <button
                  className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                  key={id}
                  onClick={() => filterItem(Val)}
                >
                  {Val}
                </button>
              );
            })}
            <button
              className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
              onClick={() => setAuthors(authors.data)}
            >
              All
            </button>
          </div>
        </div>
        {authors.map((author) => (
          <Author author={author} isLiked={author.isLiked} deleteHandler={deleteHandler}/>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
