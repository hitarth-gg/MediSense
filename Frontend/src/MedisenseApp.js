import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ErrorComponent from "./pages/ErrorComponent";
import Choose from "./pages/Choose";
import LoginPage from "./pages/LoginPage";
import DoctorDashboard from "./pages/DoctorDashboard";

import SignUpPage from "./pages/SignUpPage";
import DoctorList from "./pages/DoctorList";
import AuthProvider, { useAuth } from "./security/AuthContext";
// import SignupForm from "./components/SignupForm";
import PatientDetailsForm from "./pages/PatientDetailsForm";
import PatientTable from "./pages/PatientTable";

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
              path="/facilitator/dashboard"
              element={
                //<AuthenticatedRoute>
                <Choose />
                //</AuthenticatedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/signup" element={<SignupForm />} /> */}
            <Route path="/facilitator/signup" element={<SignUpPage />} />
            <Route
              path="/facilitator/filldetails"
              element={<PatientDetailsForm />}
            />
            {/* <Route path="/doctor/list" element={<DoctorList />} /> */}
            <Route path="/list" element={<DoctorList />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/form" element={<PatientTable />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
