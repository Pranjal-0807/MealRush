import { useState, useEffect } from "react";

const useFetchRestaurants = () => {
  const [resList, setResList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "/api/proxy/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265..."
    );
    const json = await data.json();
    setResList(json.data);
  };

  return resList;
};
export default useFetchRestaurants;
