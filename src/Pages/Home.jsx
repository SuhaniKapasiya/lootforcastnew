import React, { useEffect, useState } from "react";
import ShoppingCard from "../components/ShoppingCard";
import Shimmer from "../components/Shimmer";

const Home = () => {
  const [item, setitem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const respone = await fetch(
      "https://lootforecast-server.onrender.com/api/getallproducts"
    );

    const json = await respone.json();

    // console.log("json------------------>", json);

    setitem(json.products);
  };

  return item.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 bg-slate-200 p-2 ">
      {item.map((products) => (
        <ShoppingCard key={products._id} products={products} />
      ))}
    </div>
  );
};

export default Home;
