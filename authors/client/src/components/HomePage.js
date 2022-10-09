import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        const filteredAuthors = authors.filter((author) => author._id !== id);
        setAuthors(filteredAuthors);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main w-50 mx-auto">
      <Link to="/create-author">Add an author</Link>
      <p className="">We have quotes by:</p>

      <ul className="author-table">
        <div className="author-title-container d-flex justify-content-around">
          <p className="">Author</p>
          <p>Actions available</p>
        </div>
        {authors.map((author) => {
          return (
            <li key={author._id} className="d-flex justify-content-between">
              {author.authorName}
              <div className="btn-container w-50 d-flex justify-content-evenly">
                <Link
                  to={`/edit-author/${author._id}`}
                  className="text-light w-50"
                >
                  <button className="btn btn-success w-100 ">Edit</button>
                </Link>

                <button
                  className="btn btn-danger text-light w-25"
                  onClick={(e) => {
                    deleteHandler(author._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
