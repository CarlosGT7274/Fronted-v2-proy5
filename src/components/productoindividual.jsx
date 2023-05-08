import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonWrapper from './checkout/BtonCheckout.jsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function ProductoIndividual(props) {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProducto() {
      try {
        const response = await fetch(`https://backend-v2-proy5.vercel.app/api/v1/products/${id}`);
        const data = await response.json();
        setProducto(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando producto...</div>;
  }
const currency = "MXN";

  return (
    <div>
      <h3>{producto.product.name}</h3>
      <p>{producto.product.description}</p>
      <p>Precio: ${producto.product.price} mxn</p>
      <p>{producto.product.image}</p>
      <img src={producto.product.image} alt={producto.product.name} />
      <ButtonWrapper currency={currency} showSpinner={false} amount={producto.product.price} />
    </div>
  );
}

export default ProductoIndividual;

