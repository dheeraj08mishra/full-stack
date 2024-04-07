import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestsurantMenu = () => {
  const id = useParams();
  // custom hook
  const restaurant = useRestrauntMenu(id.restaurantId);

  if (restaurant === null) return <ShimmerUI />;
  else {
    const { name, cuisines, costForTwoMessage } =
      restaurant?.cards[2]?.card?.card?.info;
    const itemsCard =
      restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card.itemCards;
    console.log(
      restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );

    const categoryFilter =
      restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log(categoryFilter);
    return (
      <div className="text-center">
        <h1 className="font-bold my-10 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        {/* categories accordian */}
        {
          categoryFilter.map((category) => {
            return <RestaurantCategory data={category?.card?.card} />
          })
        }
        {/* <ul>
          {itemsCard &&
            itemsCard.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - {" Rs. "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            ))}
        </ul> */}
      </div>
    );
  }
};
export default RestsurantMenu;
