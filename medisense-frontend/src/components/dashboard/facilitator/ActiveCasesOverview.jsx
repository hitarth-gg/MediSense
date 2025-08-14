import React from "react";
import {
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Activity,
  User,
  Calendar,
  TrendingUp,
} from "lucide-react";

export default function ActiveCasesOverview({ patients, doctors }) {
  // Calculate statistics
  const stats = {
    totalPatients: patients.length,
    awaitingDoctor: patients.filter((p) => p.status === "awaiting_doctor")
      .length,
    videoScheduled: patients.filter((p) => p.status === "video_scheduled")
      .length,
    inConsultation: patients.filter((p) => p.status === "in_consultation")
      .length,
    completed: patients.filter((p) => p.status === "completed").length,
    highPriority: patients.filter((p) => p.priority === "High").length,
    availableDoctors: doctors.filter((d) => d.status === "available").length,
    busyDoctors: doctors.filter((d) => d.status === "busy").length,
  };

  const completionRate =
    stats.totalPatients > 0
      ? Math.round((stats.completed / stats.totalPatients) * 100)
      : 0;

  const statCards = [
    {
      title: "Total Patients",
      value: stats.totalPatients,
      icon: Users,
      color: "bg-blue-500",
      textColor: "text-blue-600",
    },
    {
      title: "Awaiting Doctor",
      value: stats.awaitingDoctor,
      icon: Clock,
      color: "bg-orange-500",
      textColor: "text-orange-600",
    },
    {
      title: "Video Scheduled",
      value: stats.videoScheduled,
      icon: Calendar,
      color: "bg-purple-500",
      textColor: "text-purple-600",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle,
      color: "bg-green-500",
      textColor: "text-green-600",
    },
    {
      title: "High Priority",
      value: stats.highPriority,
      icon: AlertTriangle,
      color: "bg-red-500",
      textColor: "text-red-600",
    },
    {
      title: "Available Doctors",
      value: stats.availableDoctors,
      icon: User,
      color: "bg-teal-500",
      textColor: "text-teal-600",
    },
  ];

  const recentActivity = patients.slice(0, 5).map((patient) => ({
    id: patient.id,
    action: `Patient ${patient.name} registered`,
    time: new Date(patient.createdAt),
    status: patient.status,
    priority: patient.priority,
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case "awaiting_doctor":
        return "text-orange-600 bg-orange-100";
      case "video_scheduled":
        return "text-purple-600 bg-purple-100";
      case "in_consultation":
        return "text-blue-600 bg-blue-100";
      case "completed":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now - date) / (1000 * 60));
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          Dashboard Overview
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Activity className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Completion Rate */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Performance Metrics
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Case Completion Rate
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {completionRate}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  High Priority Cases
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {stats.highPriority} of {stats.totalPatients}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      stats.totalPatients > 0
                        ? (stats.highPriority / stats.totalPatients) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Doctor Availability
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {stats.availableDoctors} of {doctors.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      doctors.length > 0
                        ? (stats.availableDoctors / doctors.length) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No recent activity
              </p>
            ) : (
              recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          activity.status
                        )}`}
                      >
                        {activity.status.replace("_", " ")}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatTimeAgo(activity.time)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Doctor Status Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Doctor Status Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="border rounded-lg p-4 hover:bg-gray-50"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{doctor.name}</h4>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    doctor.status === "available"
                      ? "text-green-600 bg-green-100"
                      : doctor.status === "busy"
                      ? "text-red-600 bg-red-100"
                      : "text-gray-600 bg-gray-100"
                  }`}
                >
                  {doctor.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span>{doctor.patients} active patients</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
