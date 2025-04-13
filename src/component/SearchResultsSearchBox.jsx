import { useEffect, useState } from "react";

const SearchResultsSearchBox = ({
  items,
  setFilteredItems,
  searchText,
  setSearchText,
}) => {
  const [refine, setRefine] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [newAndUsed, setNewAndUsed] = useState("");
  const [shipping, setShipping] = useState("");

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-[20px] xl:px-0">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setFilteredItems(
              items.filter((item) =>
                item.title.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          <div className="flex gap-[16px]">
            <input
              className="border-[0.5px] h-[48px] w-[286px] xl:w-[930px]"
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <button className="bg-[#F0EEED] w-[50px] flex place-content-center p-[12px] xl:w-[176px] gap-[10px]">
              <img src="/save-search.svg" alt="" />
              <span className="hidden xl:inline">Save this search</span>
            </button>
          </div>
          <div className="py-[20px]">
            <select
              value={refine}
              onChange={(event) => setRefine(event.target.value)}
            >
              <option value="" disabled>
                Refine
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="" disabled>
                Category
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              <option value="" disabled>
                All Location
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="" disabled>
                Category
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              <option value="" disabled>
                All Location
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select
              value={newAndUsed}
              onChange={(event) => setNewAndUsed(event.target.value)}
            >
              <option value="" disabled>
                New & Used
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select
              value={shipping}
              onChange={(event) => setShipping(event.target.value)}
            >
              <option value="" disabled>
                Shipping: All
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </form>

        <nav className="mt-[20px] xl:grid grid-cols-3 gap-4 text-[14px] hidden xl:pb-[20px]">
          <a href="/">
            <span className="text-[#3E74CB]">Home & Living</span>{" "}
            <span className="text-[#8A8685]">(8,067)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Mobile phones</span>{" "}
            <span className="text-[#8A8685]">(447)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Health & beauty</span>{" "}
            <span className="text-[#8A8685]">(312)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Business, farming & industry</span>{" "}
            <span className="text-[#8A8685]">(5,522)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Toys & models</span>{" "}
            <span className="text-[#8A8685]">(367)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Anitiques & collectibles</span>{" "}
            <span className="text-[#8A8685]">(245)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Computers</span>{" "}
            <span className="text-[#8A8685]">(4,721)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Electronics & photography</span>{" "}
            <span className="text-[#8A8685]">(332)</span>
          </a>
          <a href="/">
            <span className="text-[#3E74CB]">Building & renovation</span>{" "}
            <span className="text-[#8A8685]">(193)</span>
          </a>

          <a className="text-[#3E74CB]" href="/">
            Show more categories<span className="ml-[8px]">+</span>
          </a>
        </nav>
      </div>
    </section>
  );
};

export default SearchResultsSearchBox;
