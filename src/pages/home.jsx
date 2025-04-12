import { Routes, Route } from "react-router-dom";
import TopHeader from "../component/TopHeader";
import Footer from "../Footer";
import ListningPage from "./ListningPage";
import Compare from "./comapre"; 

function Home() {
  return (
    <div>
      <TopHeader />
      <Routes>
  <Route index element={<ListningPage />} /> {/* for /search */}
  <Route path="compare" element={<Compare />} />
</Routes>

      <Footer />
    </div>
  );
}

export default Home;
