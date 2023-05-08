import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormUser from './components/FormUser'
import Loginuser from './components/Loginuser'
import Profile from './components/Profile'
import ThemeProvider from './context/ThemeContext';
import UserProvider from './context/UserContext';
import LoginProvider from './context/LoginContext';
import Listadeproductos from './components/Listadeproductos';
import Checkout from './components/checkout/';
import ProductoIndividual from './components/productoindividual.jsx';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <FormUser />,
  },
  {
    path: '/login',
    element: <LoginProvider><Loginuser /></LoginProvider>,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/listadeproductos',
    element: <Listadeproductos />,
  }
  ,
  {
    path: '/checkout',
    element:( 
    <Checkout>
        <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
          </PayPalScriptProvider>
    </Checkout>
    ),
  },
  {
    path: '/prodindividual/:id',
    element:( 
      <PayPalScriptProvider
                options={{
                    "client-id": "ATZroH_4k1HAmAPAZc0fHJ1OoIfy03AeNdK6tg-PcmgDSi9OK__b0n4931udgxH03Yur3fQuzMbxpU5L",
                    components: "buttons",
                    currency: "USD"
                }}
            >
          <ProductoIndividual />
      </PayPalScriptProvider>
  ),
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
)
