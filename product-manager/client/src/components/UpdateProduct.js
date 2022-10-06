import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateProduct = (props) => {
  const { products, setProducts } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const onsubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onsubmitHandler}>
      <h2>Product Manager</h2>
      <label htmlFor="">
        Title
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="">
        Price
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </label>
      <label htmlFor="">
        Description
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </label>
      <input type="submit" value="Edit Product" />
    </form>
  );
};

export default UpdateProduct;
