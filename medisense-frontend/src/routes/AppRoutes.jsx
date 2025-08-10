import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/landing/Home";
import GetStarted from "@/pages/landing/GetStarted";

// auth
import FacilitatorLogin from "@/pages/auth/facilitator/FacilitatorLogin";
import FacilitatorRegister from "@/pages/auth/facilitator/FacilitatorRegister";
import DoctorLogin from "@/pages/auth/doctor/DoctorLogin";
import DoctorRegister from "@/pages/auth/doctor/DoctorRegister";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-started" element={<GetStarted />} />

      <Route path="/auth/facilitator/login" element={<FacilitatorLogin />} />
      <Route path="/auth/facilitator/register" element={<FacilitatorRegister />} />

      <Route path="/auth/doctor/login" element={<DoctorLogin />} />
      <Route path="/auth/doctor/register" element={<DoctorRegister />} />

      {/* TODO: add protected routes for facilitators/doctors */}
    </Routes>
  );
}
