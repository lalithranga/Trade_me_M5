import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/home.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search/*" element={<Home/>} />

       
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
