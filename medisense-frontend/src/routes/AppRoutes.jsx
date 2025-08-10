import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/landing/Home";
import GetStarted from "@/pages/landing/GetStarted";
import Dashboard from "@/pages/Dashboard";
import DoctorDashboard from "@/pages/dashboard/DoctorDashboard";
import FacilitatorDashboard from "@/pages/dashboard/FacilitatorDashboard";

// auth
import FacilitatorLogin from "@/pages/auth/facilitator/FacilitatorLogin";
import FacilitatorRegister from "@/pages/auth/facilitator/FacilitatorRegister";
import DoctorLogin from "@/pages/auth/doctor/DoctorLogin";
import DoctorRegister from "@/pages/auth/doctor/DoctorRegister";

// Route protection components
import { PublicRoute, ProtectedRoute } from "@/components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-started" element={<GetStarted />} />

      {/* Protected dashboard routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/doctor/dashboard" 
        element={
          <ProtectedRoute requiredRole="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/facilitator/dashboard" 
        element={
          <ProtectedRoute requiredRole="facilitator">
            <FacilitatorDashboard />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/auth/facilitator/login" 
        element={
          <PublicRoute>
            <FacilitatorLogin />
          </PublicRoute>
        } 
      />
      <Route 
        path="/auth/facilitator/register" 
        element={
          <PublicRoute>
            <FacilitatorRegister />
          </PublicRoute>
        } 
      />

      <Route 
        path="/auth/doctor/login" 
        element={
          <PublicRoute>
            <DoctorLogin />
          </PublicRoute>
        } 
      />
      <Route 
        path="/auth/doctor/register" 
        element={
          <PublicRoute>
            <DoctorRegister />
          </PublicRoute>
        } 
      />
    </Routes>
  );
}
