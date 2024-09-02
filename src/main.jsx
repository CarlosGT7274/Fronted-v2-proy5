import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/login.jsx";
import "./index.css";
import Productos from "./pages/productos.jsx"

function RootComponent() {
  const [token, setToken] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login setToken={setToken} />, 
    },
    {
      path: "/productos",
      element: <Productos />
    }
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);

