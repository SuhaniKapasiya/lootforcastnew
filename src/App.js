import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import AboutUs from "./components/AboutUs";
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
    <div className="bg-slate-300">
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="aaboutus" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
