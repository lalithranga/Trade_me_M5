import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/home.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ShippingPage from "./pages/ShippingPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search/*" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
