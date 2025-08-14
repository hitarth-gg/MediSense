import React from "react";

export default function PatientCard({ patient, isSelected, onClick }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
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
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
        isSelected ? "bg-blue-50 border-r-4 border-blue-500" : ""
      }`}
    >
      <div className="flex items-start space-x-3">
        {/* Priority Indicator */}
        <div
          className={`w-1 h-16 rounded-full ${getPriorityColor(
            patient.priority
          )} flex-shrink-0`}
        ></div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-gray-900 truncate">
              {patient.name}
            </h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                patient.priority
              )} text-white`}
            >
              {patient.priority}
            </span>
          </div>

          {/* Patient Info */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
            <span>{patient.id}</span>
            <span>•</span>
            <span>{patient.age}Y</span>
            <span>•</span>
            <span className="capitalize">{patient.gender}</span>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-2">
            {patient.village}, {patient.district}
          </p>

          {/* Symptoms */}
          <p className="text-sm text-gray-700 line-clamp-2 mb-2">
            {patient.symptoms}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{formatTimeAgo(patient.createdAt)}</span>
            {patient.status === "completed" && (
              <span className="text-green-600 font-medium">Error</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
