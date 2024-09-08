import responseData from "../utils/Response.json";
import CardInfo from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let dataFetchedInitially = [];
let offsetInfo = {};
const Body = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [login, setLogin] = useState("Login");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();

        offsetInfo = {
          nextFetch: data.data.nextFetch,
          pageOffset: data.data.pageOffset,
          csrfToken: data.csrfToken,
        };

        const parsedData =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
            (current) => ({
              avgRating: current.info.avgRating,
              name: current.info.name,
              imageUrl: current.info.cloudinaryImageId,
              cuisines: current.info.cuisines,
              id: current.info.id,
              sla: current.info.sla,
              costForTwo: current.info.costForTwo,
              deliveryTime: current.info.sla.deliveryTime,
              pageOffset: current.info.pageOffset,
            })
          ) || [];

        dataFetchedInitially = parsedData;
        setDataToShow(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //   filter the top rated restaurants
  const filteredData = () => {
    const filteredData = dataFetchedInitially.filter((current) => {
      return current.avgRating > 4.4;
    });
    setDataToShow(filteredData);
  };

  //    restore the data
  const restoreData = () => {
    setDataToShow(dataFetchedInitially);
    setSearchValue("");
  };

  // Handle search input
  let inputValueForFetch = (event) => {
    setSearchValue(event.target.value);
  };
  // Filter restaurants by name
  let searchUpdatedClick = () => {
    const filteredData = dataFetchedInitially.filter((currentRow) => {
      return currentRow.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setDataToShow(filteredData);
  };

  const loginLogoutFunction = () => {
    setLogin(
      login === "Login"
        ? (alert("You are logged out"), "Logout")
        : (alert("You are logged in"), "Login")
    );
  };
  return (
    <>
      {/* Search input and buttons */}
      <input
        type="text"
        placeholder="Search...."
        onChange={inputValueForFetch}
        value={searchValue}
      />
      <button onClick={searchUpdatedClick}>Search</button>
      <button onClick={filteredData}>Top Rated</button>
      <button onClick={restoreData}>Reset</button>
      <button onClick={loginLogoutFunction}>{login}</button>
      {/* Display shimmer or card data */}
      <div
        className={`card-container ${
          dataToShow.length < dataFetchedInitially.length ? "filtered" : ""
        }`}
      >
        {dataToShow.length === 0 ? (
          <Shimmer />
        ) : (
          dataToShow.map((currentRow) => (
            <Link key={currentRow.id} to={"/restaurant/" + currentRow.id}>
              <CardInfo data={currentRow} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
