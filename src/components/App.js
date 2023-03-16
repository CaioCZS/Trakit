import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import HabitsPage from "../pages/Habits/HabitsPage";
import ScreenSize from "./ScreenSize";

function App() {
  return (
    <ScreenSize>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </ScreenSize>
  );
}

export default App;
