import { useEffect, useState } from "react";
import { RestaurantMenu_URL } from "./constants";

const useRestrauntMenu = (restaurantId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    fetchMenu = async () => {
        const response = await fetch(RestaurantMenu_URL + restaurantId);
        const data = await response.json();
        console.log(data);
        setRestaurantInfo(data.data);
    }
  return restaurantInfo;
};

export default useRestrauntMenu;
