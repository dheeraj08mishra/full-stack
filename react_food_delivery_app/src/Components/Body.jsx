import responseData from "../utils/Response.json";
import CardInfo from "./Restaurant";
import { useState } from "react";
let data =
  responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
    (current) => {
      return {
        avgRating: current.info.avgRating,
        name: current.info.name,
        imageUrl: current.info.cloudinaryImageId,
        cuisines: current.info.cuisines,
        id: current.info.id,
        sla: current.info.sla,
        costForTwo: current.info.costForTwo,
        deliveryTime: current.info.sla.deliveryTime,
      };
    }
  ) || [];
const Body = () => {
  const [dataToShow, setDataToShow] = useState(data);

  //   filter the top rated restaurants
  const filteredData = () => {
    const filteredData = data.filter((current) => {
      return current.avgRating > 4.4;
    });
    setDataToShow(filteredData);
  };

  //    restore the data
  const restoreData = () => {
    setDataToShow(data);
  };
  return (
    <>
      {/* Buttons to filter or reset */}
      <button onClick={filteredData}>Top Rated</button>
      <button onClick={restoreData}>Reset</button>
      {/* Display the filtered or original data */}
      <div className="card-container">
        {dataToShow.map((currentRow) => (
          <CardInfo key={currentRow.id} data={currentRow} />
        ))}
      </div>
    </>
  );
};

export default Body;
