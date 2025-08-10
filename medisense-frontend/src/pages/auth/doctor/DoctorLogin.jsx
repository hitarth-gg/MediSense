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
import { Stethoscope, Eye, EyeOff, Heart, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";

export default function DoctorLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        // Check if user is actually a doctor
        if (result.user.role !== 'doctor') {
          setError("This account is not registered as a doctor. Please use the correct login page.");
          return;
        }
        
        // Redirect to doctor dashboard
        navigate('/doctor/dashboard', { replace: true });
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">MediSense</span>
          </Link>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto p-3 bg-cyan-100 dark:bg-cyan-900/50 rounded-full">
              <Stethoscope className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle className="text-2xl text-cyan-600 dark:text-cyan-400">Login to your MediSense Doctor Account</CardTitle>
              <CardDescription className="mt-2">Access your medical dashboard to review patients</CardDescription>
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

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="doctor@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  required 
                  className="h-11"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                    required 
                    className="h-11 pr-10"
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

              <Button 
                type="submit" 
                className="w-full h-11 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login to Dashboard"
                )}
              </Button>

              <div className="text-center">
                <Link to="/auth/doctor/forgot-password" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/auth/doctor/register" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Register as Doctor
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Are you a facilitator?{" "}
            <Link to="/auth/facilitator/login" className="text-blue-600 dark:text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
