import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId ,areaName } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[300px] rounded-lg shadow-lg bg-white"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-t-lg w-full h-48 object-cover"
         src={CDN_URL + cloudinaryImageId}
       
      ></img>
      <div className="p-4">
        <h3 className=" font-bold text-lg">{name}</h3>
        <div className="flex items-center mt-2">
          <span className="ml-1 text-gray-700">
            {avgRating.toFixed(1)} Stars
          </span>
        </div>

        <div className="mt-2">
          <span className="font-bold text-gray-700">Cost for two:</span>
          <span className="ml-1">{costForTwo}</span>
        </div>
        {sla && (
          <div className="mt-2">
            <span className="ml-1">{sla.slaString}</span>
          </div>
        )}
        <h4 className="text-gray-700">{cuisines.join(" , ")}</h4>
        <h4 className="text-gray-700">{areaName}</h4>
      </div>
    </div>
    //   </div>

    // </div>
  );

  
};
//Higher order component
//input restaurantcard===>output restaurantCARDPromoted

export const ResCardwithPromotion = ( ResCard) => { 
  return(props)=>{
    return (
      <div>
        <label className="absolute bg-green-400 text-white m-2 p-2 rounded-lg">{props.resData.info.availability.opened?"Opened":"Closed"}</label>
        <label className="absolute bg-green-400 text-white float-right rounded-lg">{props.resData.info?.veg===true?"Veg":"Veg-Non Veg"}</label>
        <ResCard {...props}/>
      </div>
    )
  }
  // return (props) => {
  //   const { cards } = props;
  //   const promotedCard = cards.find((card) => card.cardType === "PROMOTED");
  //   return <WrappedComponent {...props} promotedCard={promotedCard} />;
  // };
};

export default ResCard;
