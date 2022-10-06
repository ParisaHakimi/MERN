import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
  const {products,setProducts}=props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onsubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        setProducts([...products, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
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
      <input type="submit" value="Create" />
    </form>
  );
};

export default CreateProduct;
