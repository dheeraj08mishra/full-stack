import {CDN_URL} from "../utils/constants";
const ResCard = (props) => {
  const {resData} = props;
    const {
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
      cloudinaryImageId,
    } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-cardList"
          src={ CDN_URL
             + 
            cloudinaryImageId
          }
        ></img>
        <h3 className="resturantName">{name}</h3>
        <h4 className="resturantName">{cuisines.join(",")}</h4>
        <h4 className="resturantName">{avgRating}</h4>
        <h4 className="resturantName">{costForTwo}</h4>
        <h4 className="resturantName">{sla?.slaString}</h4>
      </div>
    );
  };

  export default ResCard;