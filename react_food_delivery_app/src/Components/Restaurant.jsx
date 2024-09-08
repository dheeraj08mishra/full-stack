import { CDN_url } from "../utils/constants";
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
      <img src={CDN_url + imageUrl} alt={name} />
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

export default CardInfo;
