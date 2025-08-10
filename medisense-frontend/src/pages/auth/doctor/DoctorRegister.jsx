import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Stethoscope, Eye, EyeOff, Heart } from "lucide-react";

export default function DoctorRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    medicalLicense: "",
    specialization: "",
    experience: "",
    hospital: "",
    state: "",
    city: "",
    availability: "",
    languages: "",
    password: "",
    confirmPassword: "",
  });

  const specializations = [
    "General Medicine","Pediatrics","Cardiology","Dermatology","Orthopedics",
    "Gynecology","Neurology","Psychiatry","Ophthalmology","ENT",
    "Emergency Medicine","Family Medicine","Internal Medicine","Surgery"
  ];

  const indianStates = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
    "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
    "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
    "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor registration:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-2xl text-blue-600">MediSense</span>
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto p-3 bg-cyan-100 rounded-full">
              <Stethoscope className="h-8 w-8 text-cyan-600" />
            </div>
            <div>
              <CardTitle className="text-2xl text-cyan-600">Register as a MediSense Doctor</CardTitle>
              <CardDescription className="mt-2">Join our network of healthcare professionals serving rural communities</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Dr. Enter your full name" value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="doctor@example.com" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>

              {/* Professional Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="medicalLicense">Medical License Number *</Label>
                  <Input id="medicalLicense" placeholder="Enter license number" value={formData.medicalLicense}
                    onChange={(e) => setFormData({ ...formData, medicalLicense: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input id="experience" type="number" placeholder="e.g., 5" value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, specialization: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    {specializations.map((spec) => (
                      <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hospital">Current Hospital/Clinic *</Label>
                <Input id="hospital" placeholder="Enter hospital/clinic name" value={formData.hospital}
                  onChange={(e) => setFormData({ ...formData, hospital: e.target.value })} required />
              </div>

              {/* Location Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="Enter city" value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="availability">Preferred Consultation Hours</Label>
                  <Input id="availability" placeholder="e.g., 9 AM - 5 PM" value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="languages">Languages Spoken</Label>
                  <Input id="languages" placeholder="e.g., Hindi, English, Tamil" value={formData.languages}
                    onChange={(e) => setFormData({ ...formData, languages: e.target.value })} />
                </div>
              </div>

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="Create password"
                      value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required className="pr-10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? "Hide password" : "Show password"}>
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password"
                      value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required className="pr-10" />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}>
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full h-11 bg-cyan-600 hover:bg-cyan-700">
                Register as Doctor
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/auth/doctor/login" className="text-cyan-600 hover:underline font-medium">
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
