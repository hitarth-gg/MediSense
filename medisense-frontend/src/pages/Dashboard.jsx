import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/ui/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Stethoscope, Activity, Clock } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const getDashboardContent = () => {
    if (user?.role === 'doctor') {
      return {
        title: 'Doctor Dashboard',
        description: 'Welcome to your medical practice dashboard',
        icon: Stethoscope,
        color: 'cyan',
        stats: [
          { label: 'Patients Today', value: '12', icon: Users },
          { label: 'Consultations', value: '8', icon: Activity },
          { label: 'Pending Reviews', value: '4', icon: Clock },
        ]
      };
    } else if (user?.role === 'facilitator') {
      return {
        title: 'Facilitator Dashboard',
        description: 'Welcome to your community health dashboard',
        icon: Users,
        color: 'blue',
        stats: [
          { label: 'Patients Registered', value: '24', icon: Users },
          { label: 'Cases Submitted', value: '15', icon: Activity },
          { label: 'Pending Reviews', value: '6', icon: Clock },
        ]
      };
    }
    return null;
  };

  const dashboardData = getDashboardContent();
  const IconComponent = dashboardData?.icon || Users;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className={`p-3 bg-${dashboardData?.color}-100 dark:bg-${dashboardData?.color}-900/50 rounded-full`}>
                <IconComponent className={`h-8 w-8 text-${dashboardData?.color}-600 dark:text-${dashboardData?.color}-400`} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">{dashboardData?.title}</h1>
                <p className="text-muted-foreground">{dashboardData?.description}</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Welcome back, <span className="font-semibold text-foreground">{user?.name}</span>!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {dashboardData?.stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <StatIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest actions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Activity className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Patient consultation completed</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-medium">Review pending approval</p>
                      <p className="text-sm text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">New patient registered</p>
                      <p className="text-sm text-muted-foreground">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {user?.role === 'doctor' ? (
                    <>
                      <button className="w-full p-3 text-left bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/20 dark:hover:bg-cyan-900/30 rounded-lg transition-colors">
                        <p className="font-medium text-cyan-700 dark:text-cyan-300">Review Patient Cases</p>
                        <p className="text-sm text-cyan-600 dark:text-cyan-400">Check pending consultations</p>
                      </button>
                      <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                        <p className="font-medium text-green-700 dark:text-green-300">Update Availability</p>
                        <p className="text-sm text-green-600 dark:text-green-400">Manage consultation hours</p>
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                        <p className="font-medium text-blue-700 dark:text-blue-300">Register New Patient</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Add patient information</p>
                      </button>
                      <button className="w-full p-3 text-left bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                        <p className="font-medium text-purple-700 dark:text-purple-300">Submit Case</p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">Send case for review</p>
                      </button>
                    </>
                  )}
                  <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/20 dark:hover:bg-gray-900/30 rounded-lg transition-colors">
                    <p className="font-medium text-gray-700 dark:text-gray-300">View Reports</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Generate and view reports</p>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
