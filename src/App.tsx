import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Nav from "./Components/Nav/Nav";

export default function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
