import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { DISH_IMAGE } from "../utils/constants";

const CartDishes = ({ cardInfo }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="space-y-8">
      {cardInfo.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center"
        >
          <div className="w-3/4">
            <div className="font-semibold text-xl mb-2">
              {item?.card?.info?.name}
            </div>
            <span className="font-medium text-lg">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="pt-2 font-light text-sm">
              {item?.card?.info?.description}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="font-bold text-md">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleRemove(item)}
                  className="bg-gray-200 text-black px-3 py-1 rounded-full font-semibold hover:bg-gray-300 transition duration-200"
                >
                  -
                </button>
                <span className="font-bold text-lg">{item?.quantity}</span>
                <button
                  onClick={() => handleAdd(item)}
                  className="bg-gray-200 text-black px-3 py-1 rounded-full font-semibold hover:bg-gray-300 transition duration-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-32 w-32 rounded-lg shadow-md"
              src={DISH_IMAGE + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDishes;
