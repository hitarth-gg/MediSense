import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ErrorComponent from "./pages/ErrorComponent";
import Choose from "./pages/Choose";
import LoginPage from "./pages/LoginPage";

export default function MedisenseApp() {
  return (
    <div className="MedisenseApp">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
