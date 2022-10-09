// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewAuthor = ({ authorName, setAuthorName }) => {
  //   const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const onsubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/addAuthor", { authorName })
      .then((res) => {
        console.log(res.data);
        setAuthorName([...authorName, res.data]);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main w-50 mx-auto">
      <Link to="/">Home</Link>
      <p className="">Add a new author:</p>
      <form className="mx-auto" onSubmit={onsubmitHandler}>
        <label className="w-100 mb-4">
          Name:
          <input type="text" onChange={(e) => setAuthorName(e.target.value)} />
        </label>
        <div className="btn-container w-100 d-flex justify-content-between">
          <Link to="/" className="btn btn-secondary w-25">
            Cancel
          </Link>
          <input type="submit" className="btn btn-success w-50" />
        </div>
      </form>
    </div>
  );
};

export default NewAuthor;
