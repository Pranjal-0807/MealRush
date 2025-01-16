import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId=793100&catalog_qa=undefined&submitAction=ENTER" +
        resId
    );
    const json = await data.json();
    setResMenu(json.data);
  };
  return resMenu;
};
export default useRestaurantMenu;
