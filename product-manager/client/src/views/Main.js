import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <CreateProduct products={products} setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Main;
