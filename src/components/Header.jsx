import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-12 w-auto bg-slate-400 text-white">
      <div className="flex justify-between">
        <Link to={"/"}>
          {" "}
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-12"
              src="https://res.cloudinary.com/dgdcxdajg/image/upload/v1701629510/loot-forecast-high-resolution-logo-color-on-transparent-background_cntehc.png"
              alt="Your Company"
            />
            <span className="text-gray-200 font-bold text-xl ml-2">
              Lootforecast
            </span>
          </div>
        </Link>

        <div className="relative">
    
          <Link to="/cart">
            <IoCartOutline className="text-3xl text-white mt-2 mr-2" />{" "}
          
          </Link>
          <div className="absolute -top-2 -right-1 bg-red-400 text-white text-xs 
          font-bold rounded-full h-5 w-5 flex items-center justify-center mt-2 mr-2">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
