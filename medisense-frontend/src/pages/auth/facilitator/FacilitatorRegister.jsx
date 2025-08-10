import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Users, Eye, EyeOff, Heart, AlertCircle, Loader2, CheckCircle } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";

export default function FacilitatorRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    village: "",
    experience: "",
    education: "",
    languages: "",
    password: "",
    confirmPassword: "",
  });

  const { register } = useAuth();
  const navigate = useNavigate();

  const indianStates = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
    "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
    "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
    "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await register(formData, 'facilitator');
      
      if (result.success) {
        setSuccess("Registration successful! You can now login with your credentials.");
        // Clear form
        setFormData({
          fullName: "", email: "", phone: "", state: "", district: "", village: "",
          experience: "", education: "", languages: "", password: "", confirmPassword: ""
        });
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/auth/facilitator/login');
        }, 2000);
      } else {
        setError(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
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
            <div className="mx-auto p-3 bg-blue-100 rounded-full">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-2xl text-blue-600">Register as a MediSense Facilitator</CardTitle>
              <CardDescription className="mt-2">
                Join our network of healthcare facilitators serving rural communities
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
                </div>
              )}

              {success && (
                <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-green-700 dark:text-green-300">{success}</span>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    placeholder="Enter your full name" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="facilitator@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  required 
                  disabled={isSubmitting}
                />
              </div>

              {/* Location Information */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select 
                    onValueChange={(value) => setFormData({ ...formData, state: value })}
                    disabled={isSubmitting}
                  >
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
                  <Label htmlFor="district">District *</Label>
                  <Input 
                    id="district" 
                    placeholder="Enter district" 
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="village">Village/Area *</Label>
                  <Input 
                    id="village" 
                    placeholder="Enter village/area" 
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="education">Education Background</Label>
                  <Input 
                    id="education" 
                    placeholder="e.g., 12th Pass, Graduate" 
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })} 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Healthcare Experience</Label>
                  <Input 
                    id="experience" 
                    placeholder="e.g., 2 years as ASHA worker" 
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })} 
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="languages">Languages Spoken</Label>
                <Input 
                  id="languages" 
                  placeholder="e.g., Hindi, English, Local dialect" 
                  value={formData.languages}
                  onChange={(e) => setFormData({ ...formData, languages: e.target.value })} 
                  disabled={isSubmitting}
                />
              </div>

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create password"
                      value={formData.password} 
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required 
                      className="pr-10" 
                      disabled={isSubmitting}
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:opacity-50"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      disabled={isSubmitting}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Input 
                      id="confirmPassword" 
                      type={showConfirmPassword ? "text" : "password"} 
                      placeholder="Confirm password"
                      value={formData.confirmPassword} 
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required 
                      className="pr-10" 
                      disabled={isSubmitting}
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:opacity-50"
                      aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                      disabled={isSubmitting}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register as Facilitator"
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/auth/facilitator/login" className="text-blue-600 hover:underline font-medium">
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
