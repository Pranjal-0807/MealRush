import React from "react";
import { CART_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center m-4 p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <Link to="/">
        {" "}
        <div className="text-black font-bold text-3xl tracking-wide">
          <span className="hover:text-gray-600 transition duration-300">
            MealRush
          </span>
        </div>
      </Link>

      <Link to="/cart">
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
          <img className="w-6 h-6 mr-2" src={CART_LOGO} alt="Cart Logo" />
          <span className="font-semibold">Cart</span>
          <span className="ml-1">({cartItems.length})</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
