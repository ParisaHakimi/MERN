import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log("Deleted from db");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="single-product">
      <h3>Product Name: {product.title}</h3>
      <p>Product Price: {product.price}</p>
      <p>Product Description: {product.description}</p>
      <Link to={`/edit-product/${product._id}`}>Edit Product</Link>
      <button onClick={(e) => deleteHandler(product._id)}>
        Delete Product
      </button>
    </div>
  );
};

export default Detail;
