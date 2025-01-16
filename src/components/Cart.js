import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import CartDishes from "./CartDishes";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div>
        <h1 className=" m-2 p-2 font-extrabold text-3xl text-center line-height-4">
          Cart
        </h1>
      </div>
      <div className="m-12">
        {cartItems.length > 0 ? (
          <>
            <CartDishes cardInfo={cartItems} handleRemove={handleRemoveItem} />
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white p-3 rounded mt-5"
            >
              Clear Cart
            </button>
          </>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
