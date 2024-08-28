import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/404.jsx";
import Home from "./components/pages/home.jsx";
import Details from "./components/pages/details.jsx";
import Cart from "./components/pages/cart.jsx";
import Success from "./components/pages/success.jsx";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:detailsID",
    element: <Details />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/tes",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
