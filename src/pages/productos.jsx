import React, { useEffect, useState } from "react";
import Header from "../components/header";
import api from '../api/axios';
import ProductCard from "../components/card";

export default function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/product/",
        );
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto my-4">
        <div className=" grid lg:grid-cols-3 gap-0 ">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
