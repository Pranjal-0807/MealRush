import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { DISH_IMAGE } from "../utils/constants";

const ItemCards = ({ cardInfo }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {cardInfo.map((item) => (
        <div className="pt-10 mb-1  shadow-lg flex justify-between">
          <div className="w-3/4">
            <div className="font-medium">{item?.card?.info?.name}</div>
            <span>
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="pt-10 font-extralight">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            <button
              onClick={() => handleClick(item)}
              className="absolute mx-10 mt-24 bg-black p-2 rounded-md text-white"
            >
              Add+
            </button>
            <img
              className="h-32 rounded-lg w-32 mb-4 mr-6"
              src={DISH_IMAGE + item?.card?.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
