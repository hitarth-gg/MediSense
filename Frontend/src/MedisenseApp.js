import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ErrorComponent from "./pages/ErrorComponent";
import Choose from "./pages/Choose";
import LoginPage from "./pages/LoginPage";
import DoctorList from "./pages/DoctorList";

import AuthProvider, { useAuth } from "./security/AuthContext";

export default function MedisenseApp() {
  function AuthenticatedRoute({ children }) {
    const authContext = useAuth();
    if (authContext.isAuthenticated) return children;
    else return <Navigate to="/" />; // Redirect to login page if the user is not authenticated
  }

  return (
    <div className="MedisenseApp">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/choose"
              element={
                <AuthenticatedRoute>
                  <Choose />
                </AuthenticatedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/list" element={<DoctorList />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
