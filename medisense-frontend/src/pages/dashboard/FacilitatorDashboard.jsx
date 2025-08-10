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
  Users,
  FileText,
  MapPin,
  Clock,
  Activity,
  Bell,
  Settings,
  Plus,
  Search,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function FacilitatorDashboard() {
  const { user } = useAuth();

  const stats = [
    { title: "Patients Registered", value: "89", icon: Users, color: "bg-blue-500" },
    { title: "Cases Submitted", value: "156", icon: FileText, color: "bg-green-500" },
    { title: "Pending Reviews", value: "12", icon: Clock, color: "bg-orange-500" },
    { title: "This Month", value: "23", icon: Activity, color: "bg-purple-500" },
  ];

  const recentCases = [
    { 
      patient: "Ramesh Yadav", 
      age: 52, 
      symptoms: "Persistent cough, fever", 
      status: "Under Review", 
      submitted: "2 hours ago",
      priority: "High"
    },
    { 
      patient: "Sunita Kumari", 
      age: 34, 
      symptoms: "Abdominal pain, nausea", 
      status: "Reviewed", 
      submitted: "5 hours ago",
      priority: "Medium"
    },
    { 
      patient: "Ravi Kumar", 
      age: 28, 
      symptoms: "Skin rash, itching", 
      status: "Pending", 
      submitted: "1 day ago",
      priority: "Low"
    },
  ];

  const todayTasks = [
    { task: "Follow up with Kamla Devi for diabetes check", time: "10:00 AM", completed: true },
    { task: "Submit case for Rajesh Singh - chest pain", time: "11:30 AM", completed: false },
    { task: "Community health awareness session", time: "2:00 PM", completed: false },
    { task: "Visit Anganwadi center for vaccination drive", time: "4:00 PM", completed: false },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'reviewed': return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20';
      case 'under review': return 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20';
      case 'pending': return 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20';
      default: return 'text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-900/20';
    }
  };

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
              Welcome, {user?.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1 flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Community Health Facilitator • Serving rural healthcare
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
          {/* Recent Cases */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Recent Cases
              </CardTitle>
              <CardDescription>Cases you've submitted for medical review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCases.map((case_, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{case_.patient}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{case_.submitted}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Age: {case_.age} • Symptoms: {case_.symptoms}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                        {case_.status}
                      </span>
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(case_.priority)}`}>
                        {case_.priority}
                      </span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Cases
              </Button>
            </CardContent>
          </Card>

          {/* Today's Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Today's Tasks
              </CardTitle>
              <CardDescription>Your scheduled activities and follow-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayTasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className={`flex-shrink-0 ${task.completed ? 'text-green-500' : 'text-gray-400'}`}>
                      {task.completed ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                        {task.task}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{task.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Tasks
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2 text-purple-600" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks and quick access tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-6 w-6" />
                <span className="text-sm">Register New Patient</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
                <FileText className="h-6 w-6" />
                <span className="text-sm">Submit Case</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
                <Search className="h-6 w-6" />
                <span className="text-sm">Search Patients</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
                <MapPin className="h-6 w-6" />
                <span className="text-sm">Community Map</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Health Tips Card */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-300">Community Health Tip of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-600 dark:text-green-400">
              Encourage regular handwashing with soap for at least 20 seconds to prevent the spread of infections. 
              This simple practice can reduce respiratory infections by up to 16% and diarrheal diseases by up to 23%.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
