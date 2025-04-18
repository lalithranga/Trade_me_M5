import { Link } from "react-router-dom";
import { addToCart } from "../utils.jsx/compareCart.jsx";

const SearchResultsItemCard = ({
  item: {
    location,
    closing_date,
    title,
    shipping_cost,
    estimated_delivery,
    price,
  },
}) => {
  return (
    <div className="w-[392px] xl:w-[256px] text-[12px] shadow-lg xl:rounded-b-[8px]">
      <section className="h-[282px] xl:h-[208px] bg-[#D9D9D9] relative rounded-t-[8px] ">
        <img
          className="absolute top-0 right-0"
          src="./watchlist.svg"
          alt="watchlist corner image"
        />
      </section>
      <section className="bg-white p-[16px] xl:p-[8px] xl:rounded-b-[8px]">
        <div className="flex justify-between">
          <p className="text-[#9D9996] mb-[12px] xl:mb-0">{location}</p>
          <p className="text-[#9D9996]">
            Closes:{" "}
            {new Date(closing_date).toLocaleDateString("en-NZ", {
              weekday: "short",
              day: "2-digit",
              month: "short",
            })}
          </p>
        </div>
        <p className="font-bold my-[4px]">{title}</p>
        <div className="flex gap-[8px]">
          <img
            className="xl:h-[14px] self-center"
            src="./shipping.svg"
            alt="shipping icon"
          />
          <p className="text-[#9D9996] my-[8px] xl:my-0">
            ${shipping_cost} shipping to {location}
          </p>
        </div>
        <div className="flex gap-[8px]">
          <img
            className="xl:h-[14px] self-center"
            src="./estimated_delivery.svg"
            alt="estimated delivery image"
          />
          <p className="text-[#9D9996]">
            Expected delivery {estimated_delivery}
          </p>
        </div>

        <div className="flex justify-between mt-[12px] xl:mt-[32px]">
          <div className="flex gap-[8px]">
            <img
              className="xl:h-[24px] mt-[16px]"
              src="./compare.svg"
              alt="Image of comparision icon"
            />
            <button
              className="text-[#3E74CB] text-[14px] mt-[16px]"
              onClick={() => addToCart(title)}
            >
              Add to compare
            </button>
          </div>
          <div className="leading-[12px] xl:leading-[20px] text-right">
            <Link
              to="/search/payment"
              className="text-[8px] text-[#9D9996] xl:text-[12px]"
            >
              Buy Now
            </Link>
            <p className="font-bold text-[14px] xl:text-[16px]">${price}.00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResultsItemCard;
