import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
/**
 * 
  Navbar

  Body

  loader ->shimmer UI
    shoppingCardcontainer 
    cardContainer 

  Footer

 */
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
