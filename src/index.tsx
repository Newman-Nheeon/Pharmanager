import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SidebarContextProvider } from "./store/sidebarContext";
import '../src/index.css'
ReactDOM.render(
  <SidebarContextProvider>
    <App />
  </SidebarContextProvider>,
  document.getElementById("root")
);
