import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/loginPage";
import MainPageControler from "./pages/main/MainPageControler";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/coins" element={<MainPageControler />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
