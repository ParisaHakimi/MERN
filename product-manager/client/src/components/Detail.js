import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single-product">
      <h3>Product Name: {product.title}</h3>
      <p>Product Price: {product.price}</p>
      <p>Product Description: {product.description}</p>
      <Link to={`/edit-product/${product._id}`}>Edit Product</Link>
    </div>
  );
};

export default Detail;
