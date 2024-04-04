import React from "react";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { HOME_PAGE_URL } from "../utils/constants";

import useOnlineStatus from "../utils/useOnlineStatus";
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
    const data = await fetch(HOME_PAGE_URL);
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

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return <h1>Internet is not connected</h1>;
  }

  return responseData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="searchFilter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 m-4 py-2 bg-blue-500 text-white rounded-2xl"
            onClick={() => {
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
        <div className="search m-4 p-4 ">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-2xl"
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
      </div>
      <div className="flex flex-wrap ">
        {filterData.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <div className=" rounded-2xl">
              <ResCard resData={res} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
