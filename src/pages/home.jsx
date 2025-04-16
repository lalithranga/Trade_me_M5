import { Routes, Route } from "react-router-dom";
import TopHeader from "../component/TopHeader";
import Footer from "../component/Footer";
import Compare from "./comapre";
import SearchResultsPage from "./SearchResultsPage";
import PaymentPage from "./PaymentPage";
import ShippingPage from "./ShippingPage";
import SuccessPage from "./SuccessPage";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />

      <main className="flex-grow">
        <Routes>
          <Route index element={<SearchResultsPage />} /> {/* for /search */}
          <Route path="compare" element={<Compare />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
