import { useEffect, useState } from "react";
import ResultsItemCard from "../component/ResultsItemCard";
import TopHeader from "../component/TopHeader";
import Footer from "../Footer";
import ResultsSearchBox from "../component/ResultsSearchBox";

const ResultsPage = () => {
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
    <>
      <TopHeader />
      <main className="bg-[#F5F5F5]">
        <ResultsSearchBox />
        <section className="max-w-screen-xl mx-auto grid gap-[16px] justify-center xl:grid-cols-4 py-[32px]">
          {items.length > 0 &&
            items.map((item) => <ResultsItemCard key={item.id} item={item} />)}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ResultsPage;
