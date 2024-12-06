import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import { addItem } from "../utils/cartSlice";
import useColorForStore from "../utils/useColorForStore"; 
import { useState } from "react";

const ShoppingCard = ({ products }) => {


 const [tooltipVisible, setTooltipVisible] = useState(false); 
    const { getColorForStore } = useColorForStore(); 
    const dispatch = useDispatch();
    const { image, name, price, discount_percentage, store_name, mrp, link } =
     products;

   const  handleAddItem = (products)=>{

      dispatch(addItem(products));
   }

  const truncatedName = name.length > 32 ? `${name.slice(0, 32)}...` : name;


  return (
    <div className="bg-slate-300 w-[200px] h-auto m-2 mt-3 rounded-lg shadow-md">
      <div className="items-center p-2">
        <div className="absolute">
          <button
            className="px-2 py-2 bg-slate-400 text-white  rounded-md cursor-pointer"
            onClick={() => handleAddItem(products)}
          >
            Add+
          </button>
        </div>
        <img className="w-[442px] h-52 p-4 px-5 " src={image} />

        <span
          data-tooltip-id="name-tooltip"
          data-tooltip-content={name}
          className="cursor-pointer w-32"
        >
          {truncatedName}
          {name.length > 32 && <span className="text-blue ">read more</span>}
          <Tooltip
            id="name-tooltip"
            place="top"
            className="bg-black text-white p-2 rounded-md w-40 h-10 "
          />
        </span>

        <div className="flex py-2 justify-between">
          <span className="text-red-800">
            {discount_percentage} <span className="text-gray-700">off</span>
          </span>
          <span className="text-l  font-bold text-green-700">{price}</span>
          <span className="line-through  text-gray-600">{mrp}</span>
        </div>

        <div className="flex justify-between items-center relative">
          <span className={`font-semibold ${getColorForStore(store_name)}`}>
            {store_name}
          </span>
          <a href={link}>
            <button className="px-2 py-1 bg-gray-800 text-white rounded-lg">
              Get Deal
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
