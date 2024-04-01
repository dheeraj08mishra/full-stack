import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { RestaurantMenu_URL } from "../utils/constants";
console.log(RestaurantMenu_URL);
const RestsurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const id = useParams();
  console.log(id.restaurantId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(RestaurantMenu_URL + id.restaurantId);
    const data = await response.json();
    console.log(data.data?.cards[2].card.card.info);
    setRestaurant(data.data);
  };
  if (restaurant === null) return <ShimmerUI />;
  else {
    const { name, cuisines, costForTwoMessage } =
      restaurant?.cards[2]?.card?.card?.info;
    const itemsCard =
      restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card.itemCards;
    return (
      <div className="Menu">
        <h1>{name}</h1>
        <h2>
          {cuisines.join(",")} - {costForTwoMessage}
        </h2>
        <ul>
          {itemsCard.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs. "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
export default RestsurantMenu;
