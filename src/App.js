import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
