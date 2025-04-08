import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ListningPage from "./pages/ListningPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Click LandingPage search button */}
        <Route path="/search" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
