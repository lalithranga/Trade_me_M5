import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* Click LandingPage search button */}
        <Route path="/search" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
