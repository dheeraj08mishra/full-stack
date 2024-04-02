import React from "react";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
// config driven UI

// not using keys (not acceptable) <<<< index as key << unique id
const Body = () => {
  const [responseData, setResponseData] = useState([]);
  const [filterData, setFilterData] = useState([]); // filter data
  const [searchText, setSearchText] = useState("Search here ...");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setResponseData(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return responseData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="searchFilter">
        <div className="searchRes">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log({ searchText });

              const filterCurrent = filterData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (searchText.length === 0) {
                setFilterData(responseData);
              } else {
                setFilterData(filterCurrent);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = responseData.filter(
              (res) => res.info.avgRating > 4.5
            );
            // setResponseData(filterData);
            console.log(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterData.map((res) => (
          <Link key={res.info.id} to={"/restaurant/"+res.info.id}>
            <ResCard  resData={res} />;
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
