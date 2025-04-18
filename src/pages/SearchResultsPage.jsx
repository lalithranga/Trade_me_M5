import { useEffect, useState } from "react";
import ResultsItemCard from "../component/SearchResultsItemCard";
import ResultsSearchBox from "../component/SearchResultsBox";
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
    setFilteredItems(
      items.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
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
      "price-ascending": (a, b) => a.price - b.price,
      "price-descending": (a, b) => b.price - a.price,
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

    let sortFunction = sortFunctions[event.target.value];

    if (sortFunction) {
      const sortedItems = [...filteredItems].sort(sortFunction);
      setFilteredItems(sortedItems);
    }
  };

  return (
    <div>
      <h1
        id="top"
        className="max-w-screen-xl mx-auto px-[20px] xl:px-0 font-bold text-[20px] mb-[14px]"
      >
        Search Results
      </h1>
      <main className="bg-[#F5F5F5]">
        <ResultsSearchBox
          items={items}
          setFilteredItems={setFilteredItems}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <section className="max-w-screen-xl mx-auto xl:flex xl:flex-row-reverse justify-between">
          <div className="flex justify-center py-[16px] gap-[16px]">
            <div className="relative ">
              <select
                className="h-[38px] xl:h-[48px] w-[252px] border-[0.5px] border-[#65605D] appearance-none pr-[40px] pl-[8px] text-[16px] text-[#65605D] rounded-[4px] xl:text-[14px]"
                onChange={handleSortChange}
              >
                <option value="title-ascending">Title (asc)</option>
                <option value="title-descending">Title (desc)</option>
                <option value="location-ascending">Location (asc)</option>
                <option value="location-descending">Location (desc)</option>
                <option value="price-ascending">Price (asc)</option>
                <option value="price-descending">Price (desc)</option>
                <option value="lowest-shipping-cost">
                  Shipping Cost (asc)
                </option>
                <option value="highest-shipping-cost">
                  Shipping Cost (desc)
                </option>
                <option value="closing-date-ascending">
                  Closing Date (asc)
                </option>
                <option value="closing-date-descending">
                  Closing Date (desc)
                </option>
                <option value="estimated-delivery-ascending">
                  Esitmated Delivery (asc)
                </option>
                <option value="estimated-delivery-descending">
                  Esitmated Delivery (desc)
                </option>
              </select>
              <img
                src="/arrow-down-blue.svg"
                alt="Dropdown Icon"
                className="absolute right-[12px] top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
            <div className="flex">
              <button className="bg-[#F0EEED] h-[38px] w-[42px] xl:h-[48px] xl:w-[100px] flex place-content-center p-[8px] border-[0.5px] rounded-l-[4px] border-[#9D9996] gap-[4px]">
                <img
                  className="h-[24px] self-center"
                  src="/view1.svg"
                  alt="list view image"
                />
                <span className="self-center hidden xl:inline">List</span>
              </button>
              <button className="bg-[#F0EEED] h-[38px] w-[42px] xl:h-[48px] xl:w-[100px] flex place-content-center p-[8px] border-[0.5px] rounded-r-[4px] border-[#9D9996] gap-[4px]">
                <img
                  className="h-[24px] self-center"
                  src="/view2.svg"
                  alt="gallery view image"
                />
                <span className="self-center hidden xl:inline">Gallery</span>
              </button>
            </div>
          </div>
          <div className="w-[346px] xl:w-auto font-bold flex mx-auto xl:mx-0">
            <p className="self-center justify-center text-[12px] xl:text-[20px]">
              Showing {filteredItems.length} result
              {filteredItems.length !== 1 && "s"}
            </p>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto grid gap-[88px] justify-center xl:grid-cols-4 pt-[16px] pb-[88px]">
          {filteredItems.length > 0 &&
            filteredItems.map((item) => (
              <ResultsItemCard Card key={item._id} item={item} />
            ))}
        </section>
        <section className="flex justify-around max-w-screen-xl xl:mx-[480px] xl:text-[14px]">
          <div></div>
          <div className="text-center">
            <p className="text-[#65605D] text-center xl:hidden">
              Page 1 of 963
            </p>
            <nav className="text-[#3E75CB] xl:flex xl:gap-[20px] xl:max-w-screen-xl hidden">
              <Link to="/">1</Link>
              <Link to="/">2</Link>
              <Link to="/">3</Link>
              <Link to="/">4</Link>
              <Link to="/">5</Link>
              <Link to="/">6</Link>
              <Link to="/">7</Link>
              <Link to="/">...</Link>
              <Link to="/">960</Link>
            </nav>
            <div className="flex mb-[22px] mt-[48px] justify-center gap-[3px]">
              <img
                className="hidden xl:block"
                src="./arrow-up.svg"
                alt="Image of an upward facing arrow"
              />
              <a href="#top" className="block text-[#3E74CB]">
                Back to top
              </a>
            </div>
          </div>
          <Link to="/" className="text-[#3E74CB]">
            Next
          </Link>
        </section>
        <div className="fixed right-[24px] bottom-[24px]">
          <Link
            to={count > 0 ? "/search/compare" : "#"}
            className={`relative w-[90px] h-[36px] rounded-[16px] font-bold border flex items-center justify-center transition-colors duration-200 ${
              count > 0
                ? "bg-[#3E74CB] border-[#3E74CB] text-white cursor-pointer hover:bg-[#5a9fe0]"
                : "bg-[#F7F6F4] border-[#9D9996] text-[#9D9996] cursor-not-allowed pointer-events-none "
            }`}
          >
            Compare
            {count > 0 && count < 3 && (
              <div className="absolute -top-2 -left-2 w-[24px] h-[24px] rounded-full border border-[#3E74CB] bg-white text-[#3E74CB] text-xs font-bold flex items-center justify-center">
                {`0${count}`}
              </div>
            )}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;
