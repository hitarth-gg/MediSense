"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, User, Stethoscope, CheckCircle, Clock, FileText } from "lucide-react"

export default function PatientHistory({ patients }) {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter for completed patients only
  const completedPatients = patients.filter((p) => p.status === "completed")

  const filteredHistory = completedPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.assignedDoctor?.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getOutcomeText = (patient) => {
    if (patient.doctorResponse?.prescription) {
      return "Prescription provided"
    }
    if (patient.doctorResponse?.action === "request_video") {
      return "Video consultation completed"
    }
    return "Case resolved"
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient History</h2>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by patient name, ID, or doctor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{completedPatients.length}</p>
                <p className="text-sm text-gray-600">Total Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {completedPatients.filter((p) => p.doctorResponse?.prescription).length}
                </p>
                <p className="text-sm text-gray-600">Prescriptions Given</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {completedPatients.filter((p) => p.doctorResponse?.action === "request_video").length}
                </p>
                <p className="text-sm text-gray-600">Video Consultations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-cyan-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(completedPatients.map((p) => p.assignedDoctor?.id)).size}
                </p>
                <p className="text-sm text-gray-600">Doctors Worked With</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {filteredHistory.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No completed cases found</p>
            </CardContent>
          </Card>
        ) : (
          filteredHistory.map((patient) => (
            <Card key={patient.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                      <p className="text-sm text-gray-600">
                        {patient.id} • {patient.age}Y • {patient.gender}
                      </p>
                      <p className="text-sm text-gray-500">
                        {patient.village}, {patient.district}, {patient.state}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">{new Date(patient.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Symptoms</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{patient.symptoms}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Assigned Doctor</h4>
                    <div className="flex items-center space-x-2">
                      <img
                        src={patient.assignedDoctor?.avatar || "/placeholder.svg"}
                        alt={patient.assignedDoctor?.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{patient.assignedDoctor?.name}</p>
                        <p className="text-xs text-gray-500">{patient.assignedDoctor?.specialty}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Outcome</h4>
                    <p className="text-sm text-gray-600">{getOutcomeText(patient)}</p>
                    <p className="text-xs text-gray-500">
                      {patient.doctorResponse?.timestamp &&
                        new Date(patient.doctorResponse.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {patient.doctorResponse?.prescription && (
                  <div className="bg-gray-50 rounded-lg p-3 mt-4">
                    <h4 className="font-medium text-gray-900 mb-1">Final Prescription</h4>
                    <p className="text-sm text-gray-700 line-clamp-2">{patient.doctorResponse.prescription}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
