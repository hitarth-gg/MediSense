import { Stethoscope, FileText, Clock, Video, Calendar, ExternalLink } from "lucide-react"

export default function DoctorResponsePanel({ patient }) {
  const { doctorResponse, assignedDoctor } = patient

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

  const formatDateTime = (dateStr, timeStr) => {
    const date = new Date(dateStr)
    return {
      date: date.toLocaleDateString("en-IN", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      time: timeStr,
    }
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Stethoscope className="h-5 w-5 text-blue-600" />
          <span>Doctor Response</span>
        </h2>

        {/* Doctor Info */}
        {assignedDoctor && (
          <div className="bg-white rounded-lg border p-4 mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={assignedDoctor.avatar || "/placeholder.svg"}
                alt={assignedDoctor.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{assignedDoctor.name}</h3>
                <p className="text-xs text-gray-600">{assignedDoctor.specialty}</p>
              </div>
            </div>
          </div>
        )}

        {/* Status */}
        <div className="mb-4">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(patient.status)}`}
          >
            <Clock className="h-4 w-4 mr-2" />
            {patient.status === "awaiting_doctor" && "Awaiting Doctor Response"}
            {patient.status === "video_scheduled" && "Video Consultation Scheduled"}
            {patient.status === "completed" && "Case Completed"}
          </div>
        </div>

        {/* Video Consultation Card */}
        {doctorResponse?.action === "request_video" && doctorResponse.videoScheduled && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <Video className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium text-blue-900">Video Consultation Scheduled</h3>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-blue-800">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatDateTime(doctorResponse.videoScheduled.date, doctorResponse.videoScheduled.time).date}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-blue-800">
                <Clock className="h-4 w-4" />
                <span>{doctorResponse.videoScheduled.time}</span>
              </div>
            </div>

            {doctorResponse.videoScheduled.joinUrl && (
              <div className="mt-3 pt-3 border-t border-blue-200">
                <a
                  href={doctorResponse.videoScheduled.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  aria-label="Join video consultation"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Join Meeting</span>
                </a>
              </div>
            )}
          </div>
        )}

        {/* Prescription */}
        {doctorResponse?.prescription && (
          <div className="bg-white rounded-lg border p-4 mb-4">
            <h3 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
              <FileText className="h-4 w-4 text-green-600" />
              <span>Prescription</span>
            </h3>
            <div className="bg-gray-50 rounded p-3">
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{doctorResponse.prescription}</p>
            </div>
          </div>
        )}

        {/* Doctor Notes */}
        {doctorResponse?.notes && (
          <div className="bg-white rounded-lg border p-4 mb-4">
            <h3 className="font-medium text-gray-900 mb-3">Doctor's Notes</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{doctorResponse.notes}</p>
          </div>
        )}

        {/* Priority */}
        <div className="bg-white rounded-lg border p-4 mb-4">
          <h3 className="font-medium text-gray-900 mb-3">Priority Level</h3>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              patient.priority === "High"
                ? "bg-red-100 text-red-800"
                : patient.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
            }`}
          >
            {patient.priority}
          </span>
        </div>

        {/* Timestamp */}
        {doctorResponse?.timestamp && (
          <div className="text-xs text-gray-500 text-center">
            Last updated: {new Date(doctorResponse.timestamp).toLocaleString("en-IN")}
          </div>
        )}
      </div>
    </div>
  )
}
