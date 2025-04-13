import { Routes, Route } from "react-router-dom";
import TopHeader from "../component/TopHeader";
import Footer from "../component/Footer";
import Compare from "./comapre";
import SearchResultsPage from "./SearchResultsPage";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />

      <main className="flex-grow">
        <Routes>
          <Route index element={<SearchResultsPage />} /> {/* for /search */}
          <Route path="compare" element={<Compare />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
