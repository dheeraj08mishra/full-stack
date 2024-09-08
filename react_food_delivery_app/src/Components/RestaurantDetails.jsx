import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_url } from "../utils/constants";
import "./RestaurantDetails.css"; // Import the updated CSS file

function RestaurantDetails() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" +
          id
      );
      const data = await response.json();
      setMenu(data?.data?.cards || []);
    };

    fetchMenu();
  }, [id]);

  if (menu.length === 0) {
    return <Shimmer />;
  } else {
    const Recommended =
      menu[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((cardsData) => {
        return cardsData.card.card?.title === "Recommended";
      });

    return (
      <div className="recommended-container">
        <h1>Recommended Dishes</h1>
        <ul>
          {Recommended[0]?.card?.card?.itemCards?.map((current) => {
            const { name, imageId, description, price, defaultPrice, ratings } =
              current.card.info;

            return (
              <li key={name} className="recommended-item">
                <div className="recommended-item-content">
                  <h2>{name}</h2> {/* Main heading */}
                  <p>{description}</p> {/* Lighter description */}
                  {/* Price styled */}
                  <h4 className="price">
                    Price:{" "}
                    <span className="price-value">
                      ₹{price / 100 || defaultPrice / 100}
                    </span>
                  </h4>
                  {/* Rating with star icon */}
                  <h4 className="rating">
                    {ratings?.aggregatedRating?.rating ? (
                      <>
                        <span className="rating-star">★</span>
                        {ratings.aggregatedRating.rating}
                        {` (${ratings.aggregatedRating.ratingCountV2})`}
                      </>
                    ) : (
                      ""
                    )}
                  </h4>
                </div>
                <img src={CDN_url + imageId} alt={name} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RestaurantDetails;
