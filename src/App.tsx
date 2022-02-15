import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import Theme from "./Components/Theme/Theme";
import NoPage from "./Components/NoPage/NoPage";

export default function App() {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Nav />
          <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}
