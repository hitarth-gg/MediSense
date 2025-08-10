import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../../components/ui/Navbar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../../components/ui/card";
import { Button } from "../../components/ui/Button";
import {
  Stethoscope,
  Users,
  Calendar,
  FileText,
  Activity,
  Bell,
  Settings,
  TrendingUp
} from "lucide-react";

export default function DoctorDashboard() {
  const { user } = useAuth();

  const stats = [
    { title: "Total Patients", value: "156", icon: Users, color: "bg-blue-500" },
    { title: "Appointments Today", value: "8", icon: Calendar, color: "bg-green-500" },
    { title: "Pending Reviews", value: "12", icon: FileText, color: "bg-orange-500" },
    { title: "Active Cases", value: "23", icon: Activity, color: "bg-purple-500" },
  ];

  const recentPatients = [
    { name: "Rajesh Kumar", age: 45, condition: "Hypertension", priority: "Medium", time: "10:30 AM" },
    { name: "Priya Sharma", age: 32, condition: "Diabetes Check-up", priority: "Low", time: "11:15 AM" },
    { name: "Amit Singh", age: 58, condition: "Chest Pain", priority: "High", time: "2:00 PM" },
    { name: "Sunita Devi", age: 67, condition: "Joint Pain", priority: "Medium", time: "3:30 PM" },
  ];

  const pendingReviews = [
    { patient: "Mohan Lal", case: "Respiratory Issues", submitted: "2 hours ago", facilitator: "Asha Worker - Rampur" },
    { patient: "Kavita Rani", case: "Skin Condition", submitted: "4 hours ago", facilitator: "ANM - Sultanpur" },
    { patient: "Dinesh Kumar", case: "Digestive Issues", submitted: "1 day ago", facilitator: "ASHA - Village Health" },
  ];

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20';
      case 'medium': return 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20';
      case 'low': return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20';
      default: return 'text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back, Dr. {user?.name?.split(' ')[1] || user?.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Here's what's happening with your patients today.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Today's Appointments
              </CardTitle>
              <CardDescription>Scheduled patient consultations for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{patient.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Age: {patient.age} • {patient.condition}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Scheduled: {patient.time}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(patient.priority)}`}>
                        {patient.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Appointments
              </Button>
            </CardContent>
          </Card>

          {/* Pending Case Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-orange-600" />
                Pending Case Reviews
              </CardTitle>
              <CardDescription>Cases submitted by field facilitators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingReviews.map((review, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{review.patient}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{review.submitted}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{review.case}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{review.facilitator}</p>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" className="flex-1">Review Case</Button>
                      <Button size="sm" variant="outline" className="flex-1">Request More Info</Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Pending Reviews
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
                <Stethoscope className="h-6 w-6" />
                <span className="text-sm">New Consultation</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
                <Users className="h-6 w-6" />
                <span className="text-sm">Patient Records</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Schedule Appointment</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
                <FileText className="h-6 w-6" />
                <span className="text-sm">Medical Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
