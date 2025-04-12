import { Routes, Route } from "react-router-dom";
import TopHeader from "../component/TopHeader";
import Footer from "../Footer";
import ListningPage from "./ListningPage";
import Compare from "./comapre"; 

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      
      <main className="flex-grow">
        <Routes>
          <Route index element={<ListningPage />} /> {/* for /search */}
          <Route path="compare" element={<Compare />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
