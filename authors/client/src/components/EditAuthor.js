import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAuthor = ({ authorName, setAuthorName, errors, setErrors }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthorName(res.data.authorName);
      })
      .catch((err) => console.log(err));
  }, []);

  const onsubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/editAuthor/${id}`, { authorName })
      .then((res) => {
        console.log(res.data);
        navigate("/");
        setAuthorName("");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="main w-50 mx-auto">
      <Link to="/">Home</Link>
      <p className="">Edit this author:</p>
      <form className="mx-auto" onSubmit={onsubmitHandler}>
        <label className="w-100 mb-4">
          Name:
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <br />
          {errors.authorName ? (
            <span className="text-danger">{errors.authorName.message}</span>
          ) : null}
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

export default EditAuthor;
