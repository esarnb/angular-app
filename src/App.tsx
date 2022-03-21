import { useState } from "react";
import { CrudContext } from "./Contexts/crud";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import Data from "./Pages/Data/Data";
import Nav from "./Components/Nav/Nav";
import Theme from "./Components/Theme/Theme";
import NoPage from "./Components/NoPage/NoPage";


export default function App() {
  type crudType = {create: any, read: any, update: any, delete: any };
  const crudInitial = {create: undefined, read: undefined, update: undefined, delete: undefined }
  const [crudStatus, setCrudStatus] = useState<crudType>(crudInitial);
  return (
    <CrudContext.Provider value={{ crudStatus, setCrudStatus }}> {/* These should match what you put as createContext */}
      <Theme>
        <BrowserRouter>
          <Nav />
          <Routes>
              <Route index element={<Home />} />
              <Route path="data" element={<Data />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </CrudContext.Provider>
  );
}
