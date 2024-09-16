import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import useAuth from "../hooks/useAuth";
import Header from "../components/header";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ total }) => {
  if (total <= 0) {
    return null; // Don't render the PayPal button if total is 0 or negative
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ATj1adjJ_fix_jImcSS9d6SkLfDhpPjpRCw2Kn8eRIuHS8uJO0Ko8ul2LxKCSnwouapzouBF1YBpZo8-",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: total.toFixed(2),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

const CheckoutPage = () => {
  const { productosFiltrados } = useContext(ProductContext);
  const { user } = useAuth();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = productosFiltrados.reduce(
      (sum, product) => sum + (product.price || 0),
      0
    );
    setTotal(calculatedTotal);
  }, [productosFiltrados]);

  if (!user) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Please login to checkout</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((product) => (
              <div key={product._id} className="flex justify-between">
                <span>{product.name}</span>
                <span>${(product.price || 0).toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p>No products in the cart.</p>
          )}
          <div className="font-bold mt-2">Total: ${total.toFixed(2)}</div>
        </div>
        {total > 0 ? (
          <PayPalButton total={total} />
        ) : (
          <p>Please add items to your cart before checking out.</p>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;
