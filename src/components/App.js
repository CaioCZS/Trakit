import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import HabitsPage from "../pages/Habits/HabitsPage";
import ScreenSize from "../styles/ScreenSize.js";
import TodayPage from "../pages/Today/TodayPage";
import HistoricPage from "../pages/Historic/HistoricPage";
import Context from "./Context";
import Percentual from "./Percentual";
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState({ name: "", image: "", token: "" });
  const [percValue, setPercValue] = useState(0);
  return (
    <Context.Provider value={[userData, setUserData]}>
      <Percentual.Provider value={[percValue, setPercValue]}>
        <ScreenSize>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path="/habitos" element={<HabitsPage />} />
              <Route path="/hoje" element={<TodayPage />} />
              <Route path="/historico" element={<HistoricPage />} />
            </Routes>
          </BrowserRouter>
        </ScreenSize>
      </Percentual.Provider>
    </Context.Provider>
  );
}

export default App;
