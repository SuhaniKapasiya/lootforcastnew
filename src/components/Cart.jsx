import { useSelector,useDispatch } from "react-redux";
import ShoppingCard from "./ShoppingCard";
import { Tooltip } from "react-tooltip";
import useColorForStore from "../utils/useColorForStore"; 
import { removeItem, clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log("cartItem---------->", cartItem);

    const { getColorForStore } = useColorForStore();

    const dispatch = useDispatch();

    const  handleRemoveItem =(item)=>{
        dispatch(removeItem(item));
    }


    const ClearCart = () => {
       dispatch(clearCart());
     };

  return (
    <div className="bg-slate-200 p-10 ">
      <div className="absolute top-10 right-5 mt-5">
        <button
          className="px-4 py-2 bg-slate-400 text-white rounded-md cursor-pointer"
          onClick={ClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItem.map((item, index) => {
        const {
          image,
          name,
          price,
          discount_percentage,
          store_name,
          mrp,
          link,
        } = item;
        const truncatedName =
          name.length > 32 ? `${name.slice(0, 32)}...` : name;
        return (
          <div key={index}>
            <div className=" flex  w-5/12 bg-slate-300 border border-gray  ml-5 shadow-md p-2 mb-5 ">
              <div className="w-4/12 ">
                <img src={image} className=" h-52 p-4 px-5" />
              </div>

              <div className="p-2 mt-2">
                <span
                  data-tooltip-id="name-tooltip"
                  data-tooltip-content={name}
                  className="cursor-pointer w-32"
                >
                  {truncatedName}
                  {name.length > 32 && (
                    <span className="text-blue ">read more</span>
                  )}
                  <Tooltip
                    id="name-tooltip"
                    place="top"
                    className="bg-black text-white p-2 rounded-md w-40 h-10 "
                  />
                </span>
                <div className="flex py-2 justify-between mt-2">
                  <span className="text-red-800">
                    {discount_percentage}{" "}
                    <span className="text-gray-700">off</span>
                  </span>
                  <span className="text-l  font-bold text-green-700">
                    {price}
                  </span>
                  <span className="line-through  text-gray-600">{mrp}</span>
                </div>

                <div className="flex justify-between items-center relative mt-2">
                  <span
                    className={`font-semibold ${getColorForStore(store_name)}`}
                  >
                    {store_name}
                  </span>
                  <a href={link}>
                    <button className="px-2 py-1 bg-gray-800 text-white rounded-lg">
                      Get Deal
                    </button>
                  </a>

                  <div className="mt-3">
                    <button
                      className="px-2 py-2 bg-slate-400 text-white  rounded-md cursor-pointer"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
