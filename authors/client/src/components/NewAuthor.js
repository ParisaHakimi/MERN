import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const NewAuthor = ({ authorName, setAuthorName, errors, setErrors }) => {
  const [selectElement, setSelectElement] = useState("");
  const navigate = useNavigate();
  const onsubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/addAuthor", { authorName })
      .then((res) => {
        setAuthorName([...authorName, res.data]);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  // const getOption = () => {
  //   setSelectElement(selectElement.value)
  //   // selectElement = document.querySelector("#select1");
  //   const output = selectElement.value;
  //   document.querySelector(".output").textContent = output;
  // };

  return (
    <div className="main w-50 mx-auto">
      <Link to="/">Home</Link>
      <p className="">Add a new author:</p>
      <form className="mx-auto" onSubmit={onsubmitHandler}>
        <label className="w-100 mb-4">
          Name:
          <input type="text" onChange={(e) => setAuthorName(e.target.value)} />
          <br />
          {errors.authorName ? (
            <span className="text-danger">{errors.authorName.message}</span>
          ) : null}
        </label>
        {/* <p>
          Select up to three skills from the given options:
          <select id="select1">
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="apple">apple</option>
          </select>
        </p>
        <p>
          The value of the option selected is:
          <span className="output"></span>
        </p> */}
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
