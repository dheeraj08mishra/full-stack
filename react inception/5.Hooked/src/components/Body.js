import React from "react";
import ResCard from "./ResCard";
import restrautList from "../utils/mockData";
import { useState } from "react";
// config driven UI

// not using keys (not acceptable) <<<< index as key << unique id
const Body = () => {
    const[responseData, setResponseData] = useState(restrautList);
    return (
      <div className="body">
        <div className="searchFilter">
            <button className="filter-btn" onClick={()=>{
               const filterData = responseData.filter((res) => res.data.avgRating > 3.5);
                setResponseData(filterData);
                console.log(responseData);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {responseData.map((res) => {
            return <ResCard key={res.data.id} resData={res} />;
          })}
          {/* Restaurant card */}
          {/* <ResCard /> */}
        </div>
      </div>
    );
  };

  export default Body;