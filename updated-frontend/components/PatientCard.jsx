"use client"

import { Clock, AlertCircle, CheckCircle, Video } from "lucide-react"

export default function PatientCard({ patient, isSelected, onClick }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "awaiting_doctor":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "video_scheduled":
        return <Video className="h-4 w-4 text-blue-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "awaiting_doctor":
        return "Awaiting Doctor"
      case "video_scheduled":
        return "Video Scheduled"
      case "completed":
        return "Completed"
      default:
        return "Unknown"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
        isSelected ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-300"
      }`}
      role="button"
      tabIndex={0}
      aria-label={`Select patient ${patient.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick()
        }
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-medium text-gray-900 text-sm">{patient.name}</h3>
          <p className="text-xs text-gray-500">
            {patient.id} • {patient.age}Y • {patient.gender}
          </p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(patient.priority)}`}>
          {patient.priority}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {getStatusIcon(patient.status)}
          <span className="text-xs text-gray-600">{getStatusText(patient.status)}</span>
        </div>
        <div className="text-xs text-gray-500">{new Date(patient.createdAt).toLocaleDateString()}</div>
      </div>

      {patient.assignedDoctor && (
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-600">
            Dr. {patient.assignedDoctor.name.split(" ").slice(1).join(" ")} • {patient.assignedDoctor.specialty}
          </p>
        </div>
      )}
    </div>
  )
}
