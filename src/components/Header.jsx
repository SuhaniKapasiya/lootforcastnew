import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItem = useSelector((store)=>store.cart.items)

  return (
    <div className="h-12 w-auto bg-slate-400 text-white items-center">
      <div className="flex justify-between">
        <Link to={"/"}>
          {" "}
          <div className="flex flex-shrink-0 items-center ml-2">
            <img
              className="h-12"
              src="https://res.cloudinary.com/dgdcxdajg/image/upload/v1701629510/loot-forecast-high-resolution-logo-color-on-transparent-background_cntehc.png"
              alt="Your Company"
            />
            <span className="text-gray-800 font-bold text-xl ml-2">
              Lootforecast
            </span>
          </div>
        </Link>

        <div className="flex mr-6 items-center">
          <Link to="/">
            <div className="text-gray-800 underline font-bold"> Home </div>
          </Link>

          <div className="relative ml-5">
            <Link to="/cart">
              <IoCartOutline className="text-3xl text-white mt-2 mr-1" />
            </Link>
            <div
              className="absolute -top-2 -right-1 bg-red-400 text-white text-xs 
          font-bold rounded-full h-5 w-5 flex items-center justify-center mt-2 mr-2"
            >
              {cartItem?.length || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
