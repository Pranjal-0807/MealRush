import React, { useState } from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";
import { DELIVERYTIME_LOGO, RUPPEE_LOGO } from "../utils/constants";

const RestaurantDishes = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, locality, costForTwo, avgRating } =
    resMenu?.cards[2]?.card?.card?.info;

  const { deliveryTime } = resMenu?.cards[2]?.card?.card?.info?.sla;

  const { cards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const sectionsToDisplay = cards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="m-24">
      <div className="mb-16 flex justify-between">
        <div>
          <ul>
            <li className="font-bold text-lg mb-3">{name}</li>
            <li className="font-extralight">{cuisines.join(",")}</li>
            <li className="font-extralight">{locality}</li>
          </ul>
        </div>
        <div>
          <button className="text-white bg-black m-2 p-6 rounded-lg border-red-500 ">
            ⭐{avgRating}
          </button>
        </div>
      </div>

      <div className="flex">
        <span>
          <img className="h-6" src={DELIVERYTIME_LOGO} />
        </span>
        <span className="mx-4 font-extrabold">{deliveryTime} MINS</span>
        <span>
          <img
            className=" font-extrabold h-6 ml-16 mr-3 w-4"
            src={RUPPEE_LOGO}
          />
        </span>
        <span className="font-extrabold">₹{costForTwo / 100} for two</span>
      </div>
      <div className="my-8 mx-auto">
        {sectionsToDisplay.map((section, index) => (
          <Accordian
            accordianInfo={section}
            showItems={index == showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDishes;
