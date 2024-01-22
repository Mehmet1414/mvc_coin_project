import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/loginPage";
import MainPageControler from "./pages/main/MainPageControler";
import ExchangePageControler from "./pages/exchange/ExchangePageControler";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/coins" element={<MainPageControler />} />
          <Route path="/exchanges" element={<ExchangePageControler />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
