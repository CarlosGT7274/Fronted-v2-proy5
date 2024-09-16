import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import api from '../api/axios';
import ProductCard from "../components/card";
import { ProductContext } from "../context/ProductContext"

export default function Productos() {
  const { productosFiltrados } = useContext(ProductContext)

  return (
    <>
      <div className="max-w-screen-lg mx-auto my-4">
        <div className=" grid lg:grid-cols-3 gap-0 ">
          {productosFiltrados.map((product) => (
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
