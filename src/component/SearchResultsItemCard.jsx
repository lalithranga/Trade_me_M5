import { addToCart } from "../utils.jsx/compareCart.jsx";

const SearchResultsItemCard = ({
  item: { location, closing_date, title, shipping_cost, estimated_delivery, price },
}) => {
  return (
    <div className="w-[392px] xl:w-[256px] text-[14px]">
      <section className="h-[282px] xl:h-[208px] bg-gray-400 relative rounded-tr-[8px]">
        <img
          className="absolute top-0 right-0"
          src="./watchlist.png"
          alt="watchlist corner image"
        />
      </section>
      <section className="h-[182px] bg-white p-[20px]">
        <div className="flex justify-between">
          <p>{location}</p>
          <p>
            Closes:{" "}
            {new Date(closing_date).toLocaleDateString("en-NZ", {
              weekday: "short",
              day: "2-digit",
              month: "short",
            })}
          </p>
        </div>
        <p className="font-bold">{title}</p>
        <p>
          ${shipping_cost} shipping to {location}
        </p>
        <p>Expected delivery {estimated_delivery}</p>

        <div className="flex justify-between">
          <button className="text-[#3E74CB]" onClick={() => addToCart(title)}>
            Add to compare
          </button>
          <div>
            <p>Buy now</p>
            <p className="font-bold">${price}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResultsItemCard;
