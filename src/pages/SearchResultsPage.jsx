import { useEffect, useState } from "react";
import ResultsItemCard from "../component/SearchResultsItemCard";
import ResultsSearchBox from "../component/SearchResultsSearchBox";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:3000/api/items");
      const data = await response.json();

      setItems(data.sort((a, b) => a.title.localeCompare(b.title)));
    };

    fetchItems();
  }, []);

  useEffect(() => {
    setFilteredItems(items); // Update filteredItems when items changes
  }, [items]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { title: [] };
    setCount(cart.title.length);

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || {
        title: [],
      };
      setCount(updatedCart.title.length);
    };

    window.addEventListener("compareCartChanged", handleStorageChange);
    return () =>
      window.removeEventListener("compareCartChanged", handleStorageChange);
  }, []);

  const handleSortChange = (event) => {
    const sortFunctions = {
      "lowest-price": (a, b) => a.price - b.price,
      "highest-price": (a, b) => b.price - a.price,
      "lowest-shipping-cost": (a, b) => a.shipping_cost - b.shipping_cost,
      "highest-shipping-cost": (a, b) => b.shipping_cost - a.shipping_cost,
      "title-ascending": (a, b) => a.title.localeCompare(b.title),
      "title-descending": (a, b) => b.title.localeCompare(a.title),
      "location-ascending": (a, b) => a.location.localeCompare(b.location),
      "location-descending": (a, b) => b.location.localeCompare(a.location),
      "estimated-delivery-ascending": (a, b) =>
        a.estimated_delivery.localeCompare(b.estimated_delivery),
      "estimated-delivery-descending": (a, b) =>
        b.estimated_delivery.localeCompare(a.estimated_delivery),
      "closing-date-ascending": (a, b) =>
        new Date(a.closing_date) - new Date(b.closing_date),
      "closing-date-descending": (a, b) =>
        new Date(b.closing_date) - new Date(a.closing_date),
    };

    const sortFunction = sortFunctions[event.target.value];
    if (sortFunction) {
      const sortedItems = [...filteredItems].sort(sortFunction);
      setFilteredItems(sortedItems);
    }
  };

  return (
    <div>
      <h1 className="max-w-screen-xl mx-auto px-[20px] xl:px-0 font-bold text-[20px]">
        Search Results
      </h1>
      <main className="bg-[#F5F5F5]">
        <ResultsSearchBox
          items={items}
          setFilteredItems={setFilteredItems}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <section className="max-w-screen-xl mx-auto py-[20px] flex gap-[12px] place-content-center xl:place-content-start">
          <select
            className="h-[38px] w-[252px] border-[0.5px]"
            onChange={handleSortChange}
          >
            <option value="title-ascending">Title Ascending</option>
            <option value="title-descending">Title Decending</option>
            <option value="location-ascending">Location Ascending</option>
            <option value="location-descending">Location Decending</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Higest Price</option>
            <option value="lowest-shipping-cost">Lowest Shipping Cost</option>
            <option value="highest-shipping-cost">Highest Shipping Cost</option>
            <option value="closing-date-ascending">
              Closing Date Ascending
            </option>
            <option value="closing-date-descending">
              Closing Date Descending
            </option>
            <option value="estimated-delivery-ascending">
              Esitmated Delivery Ascending
            </option>
            <option value="estimated-delivery-descending">
              Esitmated Delivery Descending
            </option>
          </select>
          <div className="flex">
            <button className="bg-[#F0EEED] h-[38px] w-[42px] flex place-content-center p-[8px] border-[0.5px] rounded-l-[4px] border-[#9D9996]">
              <img src="/view1.svg" alt="" />
            </button>
            <button className="bg-[#F0EEED] h-[38px] w-[42px] flex place-content-center p-[8px] border-[0.5px] rounded-r-[4px] border-[#9D9996]">
              <img src="/view2.svg" alt="" />
            </button>
          </div>
        </section>
        <div className="w-[346px] max-w-screen-xl mx-auto xl:w-auto font-bold">
          <p className="">
            Showing {filteredItems.length} result
            {filteredItems.length > 1 && "s"}
          </p>
        </div>

        <section className="max-w-screen-xl mx-auto grid gap-[16px] justify-center xl:grid-cols-4 py-[32px]">
          {filteredItems.length > 0 &&
            filteredItems.map((item) => (
              <ResultsItemCard key={item._id} item={item} />
            ))}
        </section>

        <div className="fixed right-[24px] bottom-[24px]">
          <Link
            to="/search/compare"
            className="relative w-[90px] h-[36px] bg-[#3E74CB] text-white rounded-[16px] font-bold border border-[#3E74CB] flex items-center justify-center"
          >
            Compare
            {count > 0 && (
              <div className="absolute -top-2 -left-2 w-[24px] h-[24px] rounded-full border border-[#3E74CB] bg-white text-[#3E74CB] text-xs font-bold flex items-center justify-center">
                {count < 10 ? `0${count}` : count}
              </div>
            )}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;
