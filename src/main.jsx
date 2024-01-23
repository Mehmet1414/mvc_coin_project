import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CoinProvider } from "./context/coinContex.jsx";
import { UserProvider } from "./context/userContex.jsx";
import "./index.css";
import { ExchangeProvider } from "./context/exchangeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CoinProvider>
        <ExchangeProvider>
          <App />
        </ExchangeProvider>
      </CoinProvider>
    </UserProvider>
  </React.StrictMode>
);
