import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
// import AuthLayout from "./layout/AuthLayout";
import LoadingSpinner from "./components/UI/loadingSpinner/LoadingSpinner";

import "./scss/App.scss";
import Inbounds from "./pages/Inbounds";
import Manager from "./pages/Manager";
import Crm from "./pages/Crm";
import BankOffice from "./pages/BackOffice";
import Settings from "./pages/Settings";
import HelpDesk from "./pages/HelpDesk";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* <Route element={<AuthLayout />}> */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/inbounds/*" element={<Inbounds />}/>
              <Route path="/manager/*" element={<Manager />}/>
              <Route path="/crm" element={<Crm />}/>
              <Route path="/bankOffice" element={<BankOffice />}/>
              <Route path="/settings" element={<Settings />}/>
              <Route path="/helpDesk" element={<HelpDesk />}/>
            </Route>
          {/* </Route> */}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
