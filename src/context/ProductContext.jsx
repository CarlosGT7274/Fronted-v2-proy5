import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productData = useProducts();

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};
