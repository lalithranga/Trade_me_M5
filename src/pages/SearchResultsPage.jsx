import { useEffect, useState } from "react";
import ResultsItemCard from "../component/SearchResultsItemCard";
import TopHeader from "../component/TopHeader";
import Footer from "../Footer";
import ResultsSearchBox from "../component/SearchResultsSearchBox";

const SearchResultsPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:3000/api/items");
      const data = await response.json();

      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <TopHeader />
      <h1 className="max-w-screen-xl mx-auto px-[20px] xl:px-0 font-bold text-[20px]">
        Search Results
      </h1>
      <main className="bg-[#F5F5F5]">
        <ResultsSearchBox />
        <section className="max-w-screen-xl mx-auto py-[20px] flex gap-[12px] place-content-center xl:place-content-start">
          <select className="h-[38px] w-[252px] border-[0.5px]">
            <option value="option1">Best Match</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
          <p className="">Showing 21,137 results for ‘desk’</p>
        </div>

        <section className="max-w-screen-xl mx-auto grid gap-[16px] justify-center xl:grid-cols-4 py-[32px]">
          {items.length > 0 &&
            items.map((item) => <ResultsItemCard key={item._id} item={item} />)}
        </section>

        <button className="fixed right-[24px] bottom-[24px] w-[90px] h-[36px] bg-[#3E74CB] text-white rounded-[16px] font-bold border border-[#3E74CB]">
          Compare
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResultsPage;
