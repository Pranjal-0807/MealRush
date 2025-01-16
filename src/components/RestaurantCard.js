import { RES_PHOTO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="m-4 w-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="h-52 w-full object-cover"
        src={RES_PHOTO_URL + cloudinaryImageId}
        alt={`${name} Image`}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
        <div className="flex items-center mt-2 text-yellow-500">
          <span className="text-lg font-bold">⭐ {avgRating}</span>
          <span className="text-gray-600 ml-2">• {deliveryTime} mins</span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
