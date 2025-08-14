import React from "react";
import { Clock, MessageSquare, Video, Phone, CheckCircle } from "lucide-react";
import { Button } from "../../ui/Button";

export default function DoctorResponsePanel({ patient, doctor, onAction }) {
  const getStatusIcon = () => {
    switch (patient?.status) {
      case "awaiting_doctor":
        return <Clock className="h-5 w-5 text-orange-500" />;
      case "video_scheduled":
        return <Video className="h-5 w-5 text-blue-500" />;
      case "in_consultation":
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = () => {
    switch (patient?.status) {
      case "awaiting_doctor":
        return "Awaiting Doctor Assignment";
      case "video_scheduled":
        return "Video Call Scheduled";
      case "in_consultation":
        return "In Consultation";
      case "completed":
        return "Case Completed";
      default:
        return "Unknown Status";
    }
  };

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">Doctor Response</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage doctor assignments and consultations
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {patient ? (
          <div className="space-y-6">
            {/* Patient Status */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon()}
                <div>
                  <h3 className="font-medium text-gray-900">
                    {getStatusText()}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Patient: {patient.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Assignment */}
            {doctor ? (
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">
                  Assigned Doctor
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {doctor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{doctor.name}</p>
                    <p className="text-sm text-gray-600">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                    onClick={() => onAction("call", doctor)}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Doctor</span>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => onAction("video", doctor)}
                  >
                    <Video className="h-4 w-4" />
                    <span>Start Video Call</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">
                  Doctor Assignment
                </h3>
                <p className="text-gray-600 mb-4">No doctor assigned yet</p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => onAction("assign")}
                >
                  Assign Doctor
                </Button>
              </div>
            )}

            {/* Quick Actions */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => onAction("update_priority")}
                >
                  Update Priority
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => onAction("add_notes")}
                >
                  Add Notes
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => onAction("send_message")}
                >
                  Send Message
                </Button>
              </div>
            </div>

            {/* Case Notes */}
            {patient.notes && (
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Case Notes</h3>
                <p className="text-gray-700 text-sm">{patient.notes}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Patient Selected
              </h3>
              <p className="text-gray-600">
                Select a patient from the queue to manage doctor responses
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
