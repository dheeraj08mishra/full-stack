import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
const RestsurantMenu = () => {
  const id = useParams();
  // custom hook
  const restaurant = useRestrauntMenu(id.restaurantId);

  if (restaurant === null) return <ShimmerUI />;
  else {
    const { name, cuisines, costForTwoMessage } =
      restaurant?.cards[2]?.card?.card?.info;
    const itemsCard =
      restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card.itemCards;
    return (
      <div className="Menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      <ul>
        {itemsCard && itemsCard.map((item) => (
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
