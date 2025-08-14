"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Clock, Video, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react"

export default function ActiveCasesOverview({ patients }) {
  const activeCases = patients.filter((p) => p.status !== "completed")
  const completedCases = patients.filter((p) => p.status === "completed")

  const statusCounts = {
    awaiting_doctor: patients.filter((p) => p.status === "awaiting_doctor").length,
    video_scheduled: patients.filter((p) => p.status === "video_scheduled").length,
    completed: completedCases.length,
  }

  const priorityCounts = {
    High: patients.filter((p) => p.priority === "High").length,
    Medium: patients.filter((p) => p.priority === "Medium").length,
    Low: patients.filter((p) => p.priority === "Low").length,
  }

  const completionRate = patients.length > 0 ? (completedCases.length / patients.length) * 100 : 0

  const getStatusColor = (status) => {
    switch (status) {
      case "awaiting_doctor":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "video_scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Active Cases Overview</h2>
        <p className="text-gray-600">Monitor your current patient cases and their statuses</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{activeCases.length}</p>
                <p className="text-sm text-gray-600">Active Cases</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{statusCounts.awaiting_doctor}</p>
                <p className="text-sm text-gray-600">Awaiting Doctor</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Video className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{statusCounts.video_scheduled}</p>
                <p className="text-sm text-gray-600">Video Scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{completionRate.toFixed(0)}%</p>
                <p className="text-sm text-gray-600">Completion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Status Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Status Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className={getStatusColor("awaiting_doctor")}>
                <Clock className="h-3 w-3 mr-1" />
                Awaiting Doctor
              </Badge>
              <span className="font-semibold">{statusCounts.awaiting_doctor}</span>
            </div>
            <div className="flex items-center justify-between">
              <Badge className={getStatusColor("video_scheduled")}>
                <Video className="h-3 w-3 mr-1" />
                Video Scheduled
              </Badge>
              <span className="font-semibold">{statusCounts.video_scheduled}</span>
            </div>
            <div className="flex items-center justify-between">
              <Badge className={getStatusColor("completed")}>
                <CheckCircle className="h-3 w-3 mr-1" />
                Completed
              </Badge>
              <span className="font-semibold">{statusCounts.completed}</span>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Overall Progress</span>
                <span className="text-sm font-medium">{completionRate.toFixed(0)}%</span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Priority Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Priority Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className={getPriorityColor("High")}>
                <AlertTriangle className="h-3 w-3 mr-1" />
                High Priority
              </Badge>
              <span className="font-semibold">{priorityCounts.High}</span>
            </div>
            <div className="flex items-center justify-between">
              <Badge className={getPriorityColor("Medium")}>
                <Clock className="h-3 w-3 mr-1" />
                Medium Priority
              </Badge>
              <span className="font-semibold">{priorityCounts.Medium}</span>
            </div>
            <div className="flex items-center justify-between">
              <Badge className={getPriorityColor("Low")}>
                <CheckCircle className="h-3 w-3 mr-1" />
                Low Priority
              </Badge>
              <span className="font-semibold">{priorityCounts.Low}</span>
            </div>

            {priorityCounts.High > 0 && (
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {priorityCounts.High} high priority case{priorityCounts.High > 1 ? "s" : ""} need attention
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Active Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Active Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activeCases.slice(0, 5).map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{patient.name}</h4>
                    <p className="text-sm text-gray-600">
                      {patient.id} • {patient.age}Y
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge className={getPriorityColor(patient.priority)}>{patient.priority}</Badge>
                  <Badge className={getStatusColor(patient.status)}>
                    {patient.status === "awaiting_doctor" && "Awaiting Doctor"}
                    {patient.status === "video_scheduled" && "Video Scheduled"}
                  </Badge>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{new Date(patient.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}

            {activeCases.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-500" />
                <p>All cases completed! Great work.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
