import { useState } from "react";

const SearchResultsSearchBox = ({
  items,
  setFilteredItems,
  searchText,
  setSearchText,
}) => {
  useState(() => {
    setSearchText(localStorage.getItem("searchText"));
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-[20px] xl:px-0">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            localStorage.setItem("searchText", searchText);

            setFilteredItems(
              items.filter((item) =>
                item.title.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          <div className="flex gap-[16px]">
            <div className="flex">
              <div className="border-[0.5px] rounded-l-[4px] border-r-0 border-[#9D9996] w-[36px] flex place-content-center">
                <img src="/search.svg" alt="Search Icon" className="w-[12px]" />
              </div>

              <input
                className="border-y-[0.5px] border-[#9D9996] h-[48px] w-[286px] xl:w-[930px] outline-none"
                type="text"
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setSearchText("");
                }}
                className="border-[0.5px] border-l-0 rounded-r-[4px] border-[#9D9996] w-[36px] flex place-content-center"
              >
                <img src="/cross.svg" alt="Search Icon" className="w-[12px]" />
              </button>
            </div>

            <button className="bg-[#F0EEED] w-[50px] flex place-content-center p-[12px] xl:w-[176px] gap-[10px] rounded-[2px]">
              <img src="/save-search.svg" alt="save search image" />
              <span className="hidden xl:inline">Save this search</span>
            </button>
          </div>
          <div className="py-[20px] flex flex-wrap gap-[4px]">
            <div className="flex gap-[2px] bg-[#007ACD] h-[30px] xl:h-[34px] w-[102px] rounded-2xl justify-center">
              <img
                className="h-[12px] w-[24px] my-auto"
                src="./rivet.svg"
                alt="white dropdown arrow"
              />
              <span className="text-white font-bold my-auto text-[12px]">
                Refine
              </span>
              <img
                className="h-[24px] w-[24px] my-auto"
                src="./arrow-down-white.svg"
                alt="white dropdown arrow"
              />
            </div>
            <div className="flex gap-[2px] border border-[#007ACD] h-[30px] xl:h-[34px] w-[98px] rounded-2xl pl-[8px] justify-center">
              <span className="text-[#007ACD] my-auto text-[12px]">
                Category
              </span>
              <img
                className="h-[24px] w-[24px] my-auto"
                src="./arrow-down-blue.svg"
                alt="blue dropdown arrow"
              />
            </div>
            <div className="flex gap-[2px] border border-[#007ACD] h-[30px] xl:h-[34px] w-[123px] rounded-2xl pl-[8px] justify-center">
              <span className="text-[#007ACD] my-auto text-[12px]">
                All Locations
              </span>
              <img
                className="h-[24px] w-[24px] my-auto"
                src="./arrow-down-blue.svg"
                alt="blue dropdown arrow"
              />
            </div>
            <div className="flex gap-[2px] border border-[#007ACD] h-[30px] xl:h-[34px] w-[118px] rounded-2xl pl-[8px] justify-center">
              <span className="text-[#007ACD] my-auto text-[12px]">
                New & Used
              </span>
              <img
                className="h-[24px] w-[24px] my-auto"
                src="./arrow-down-blue.svg"
                alt="blue dropdown arrow"
              />
            </div>
            <div className="flex gap-[2px] border border-[#007ACD] h-[30px] xl:h-[34px] w-[118px] rounded-2xl pl-[8px] justify-center">
              <span className="text-[#007ACD] my-auto text-[12px]">
                Shipping: All
              </span>
              <img
                className="h-[24px] w-[24px] my-auto"
                src="./arrow-down-blue.svg"
                alt="blue dropdown arrow"
              />
            </div>
          </div>
        </form>

        <nav className="xl:grid grid-cols-[max-content_max-content_max-content] gap-y-[20px] gap-x-[40px] text-[14px] hidden xl:pb-[20px]">
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
