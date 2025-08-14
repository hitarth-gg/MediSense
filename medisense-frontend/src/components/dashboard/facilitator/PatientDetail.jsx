import React from "react";
import { User, Phone, MapPin, Edit, FileText } from "lucide-react";
import { Button } from "../../ui/Button";

export default function PatientDetail({ patient, onUpdate }) {
  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {patient.name}
              </h1>
              <p className="text-gray-600">Patient ID: {patient.id}</p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Edit className="h-4 w-4" />
            <span>Edit Details</span>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Personal Info */}
            <div className="flex items-center space-x-3">
              <div className="text-gray-600">
                <span className="font-medium">{patient.age} years</span>
                <span className="mx-2">•</span>
                <span className="capitalize">{patient.gender}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="text-gray-900">{patient.phone}</span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="text-gray-900">
                {patient.village}, {patient.district}, {patient.state}
              </span>
            </div>

            {/* Current Symptoms */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Current Symptoms
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {patient.symptoms}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Medical History */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Medical History
                </h3>
              </div>
              <p className="text-gray-700">{patient.medicalHistory}</p>
            </div>

            {/* AI Summary */}
            {patient.aiSummary && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  AI Analysis
                </h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-900 leading-relaxed">
                    {patient.aiSummary}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
