import React from 'react'
import ButtonWrapper from "./BtonCheckout.jsx"
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const Checkoutpage = () => {
  const currency = "MXN";
  return (
    <div>
        <ButtonWrapper currency={currency} showSpinner={false} />
    </div>
  )
}

export default Checkoutpage;
