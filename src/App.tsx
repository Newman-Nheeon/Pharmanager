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
import Home from "./pages/Home/Home";
import Prescription from "./pages/Inbounds/prescription/Prescription";
import SourcePrescription from "./pages/Inbounds/prescription/SourcePrescription";
import PrescriptionsManager from "./pages/Inbounds/prescription/PrescriptionsManager";
import PrescriptionDetails from "./pages/Inbounds/prescription/PrescriptionDetails";
import Cart from "./pages/Inbounds/prescription/cart";
import Checkout from "./pages/Inbounds/prescription/checkout";
import CreateQuote from "./pages/Inbounds/prescription/createquote";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* <Route element={<AuthLayout />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/account" element={<MainLayout />}>
              <Route index element={<Dashboard />} />

              <Route path="inbounds/*" element={<Inbounds />}/>
              <Route path="inbounds/prescriptions" element={<Prescription />} />
              <Route path="/account/inbounds/prescriptions/source-prescriptions" element={<SourcePrescription />} />
              <Route path="/account/inbounds/prescriptions/prescriptions-manager" element={<PrescriptionsManager />} />
              <Route path="/account/inbounds/prescriptions/prescription-details" element={<PrescriptionDetails />} />
              <Route path="/account/inbounds/prescriptions/cart" element={<Cart />} />
              <Route path="/account/inbounds/prescriptions/checkout" element={<Checkout />} />
              <Route path="/account/inbounds/prescriptions/create-quote" element={<CreateQuote callback={() => {}} />} />
             
              <Route path="manager" element={<Manager />}/>
              <Route path="crm" element={<Crm />}/>
              <Route path="bankOffice" element={<BankOffice />}/>
              <Route path="settings" element={<Settings />}/>
              <Route path="helpDesk" element={<HelpDesk />}/>
            </Route>
          {/* </Route> */}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
