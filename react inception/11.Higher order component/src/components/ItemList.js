import { CDN_URL } from "../utils/constants";
const ItemList = (items) => {
  console.log(items);
  return (
    <div>
      {items.data.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId} className="w-60" />
            <button className="bg-blue-500 text-white rounded-lg p-1">Add+ </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
