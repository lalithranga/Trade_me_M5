
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* You can add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
