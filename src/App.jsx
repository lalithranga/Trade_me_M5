import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ListningPage from "./pages/ListningPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* Click LandingPage search button */}
        <Route path="/search" element={<ListningPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
