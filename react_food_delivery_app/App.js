import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import logoImage from "./Assets/image.png";
import responseData from "./Response.json";

const Header = () => {
  return (
    <div className="container">
      <div>
        <img src={logoImage} alt="logo" />
      </div>
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Cart </a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const dataToShow =
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
console.log(dataToShow);

const CardInfo = ({ data }) => {
  const { avgRating, name, imageUrl, cuisines, costForTwo, deliveryTime } =
    data;

  const extractNumericValue = (costString) => {
    const match = costString.match(/(\d+)/);
    return match ? Number(match[1]) : NaN;
  };

  const numericCostForTwo = extractNumericValue(costForTwo);

  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageUrl}`}
        alt={name}
      />
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
      <div className="card-footer">
        <div className="rating">
          <span className="rating-icon">⭐</span>
          <h4>{avgRating}</h4>
        </div>
        <div className="cost">
          <span className="cost-icon">₹</span>
          <h4>{numericCostForTwo} FOR TWO</h4>
        </div>
        <h4>{deliveryTime} mins</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="card-container">
      {dataToShow.map((currentRow) => (
        <CardInfo key={currentRow.id} data={currentRow} />
      ))}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
