import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductList = ({ products, setProducts }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="all-products">
      <h2>All Products:</h2>
      <ul className="container">
        {products.map((product, i) => (
          <li key={i} className="product">
            <h3>{product.title}</h3>
            <Link to={`/detail/${product._id}`}>{product.title}'s page</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
