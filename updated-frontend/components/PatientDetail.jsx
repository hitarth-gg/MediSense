"use client"

import { useState, useCallback } from "react"
import { User, Phone, MapPin, FileText, ImageIcon, Edit, Save, X, Send, Brain, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PatientDetail({ patient, onStatusUpdate, doctors, onPatientUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [isRegeneratingReport, setIsRegeneratingReport] = useState(false)
  const [showSendModal, setShowSendModal] = useState(false)
  const [showDoctorSelection, setShowDoctorSelection] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  const [editedData, setEditedData] = useState({
    name: patient.name,
    age: patient.age,
    phone: patient.phone,
    village: patient.village,
    district: patient.district,
    state: patient.state,
    symptoms: patient.symptoms,
    medicalHistory: patient.medicalHistory,
    images: [...patient.images],
  })

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ]

  const handleInputChange = useCallback((field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }))
    setHasChanges(true)
  }, [])

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageUrls = files.map((file) => URL.createObjectURL(file))
    setEditedData((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }))
    setHasChanges(true)
  }

  const removeImage = (index) => {
    setEditedData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
    setHasChanges(true)
  }

  const handleSaveChanges = () => {
    const updatedPatient = {
      ...patient,
      ...editedData,
    }
    onPatientUpdate(updatedPatient)
    setIsEditing(false)
    setHasChanges(false)
  }

  const handleCancelEdit = () => {
    setEditedData({
      name: patient.name,
      age: patient.age,
      phone: patient.phone,
      village: patient.village,
      district: patient.district,
      state: patient.state,
      symptoms: patient.symptoms,
      medicalHistory: patient.medicalHistory,
      images: [...patient.images],
    })
    setIsEditing(false)
    setHasChanges(false)
  }

  const handleRegenerateReport = () => {
    setIsRegeneratingReport(true)
    setTimeout(() => {
      const newReport = `Updated AI Analysis: ${editedData.age}-year-old ${patient.gender.toLowerCase()} presenting with ${editedData.symptoms.toLowerCase()}. Medical history: ${editedData.medicalHistory || "No significant medical history"}. Based on updated symptoms and patient profile, recommend comprehensive medical evaluation and appropriate diagnostic workup. Report regenerated on ${new Date().toLocaleDateString()}.`

      const updatedPatient = {
        ...patient,
        ...editedData,
        aiSummary: newReport,
      }

      onPatientUpdate(updatedPatient)
      setIsRegeneratingReport(false)
      setHasChanges(true) 
    }, 3000)
  }

  const handleSendToDoctor = () => {
    if (!selectedDoctor) return

    setIsSending(true)
    setTimeout(() => {
      const doctor = doctors.find((d) => d.id === selectedDoctor)
      const updatedPatient = {
        ...patient,
        ...editedData,
        assignedDoctor: doctor,
        status: "awaiting_doctor", 
      }

      onPatientUpdate(updatedPatient)
      setIsSending(false)
      setShowSendModal(true)
      setShowDoctorSelection(false)
      setHasChanges(false)

      setTimeout(() => setShowSendModal(false), 2000)
    }, 1500)
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4 flex-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-2">
                    <Input
                      value={editedData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="text-xl font-bold"
                    />
                    <p className="text-gray-600">Patient ID: {patient.id}</p>
                  </div>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
                    <p className="text-gray-600">Patient ID: {patient.id}</p>
                  </>
                )}

                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  {isEditing ? (
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        value={editedData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        className="w-16 h-8"
                      />
                      <span>years • {patient.gender}</span>
                    </div>
                  ) : (
                    <span>
                      {patient.age} years • {patient.gender}
                    </span>
                  )}

                  <span className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    {isEditing ? (
                      <Input
                        value={editedData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-32 h-8"
                      />
                    ) : (
                      <span>{patient.phone}</span>
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons - Fixed Layout */}
            <div className="flex items-center space-x-2 ml-4">
              {!isEditing ? (
                <Button variant="outline" onClick={() => setIsEditing(true)} className="whitespace-nowrap">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Details
                </Button>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" onClick={handleCancelEdit} size="sm">
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                  <Button onClick={handleSaveChanges} size="sm">
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            {isEditing ? (
              <div className="flex space-x-2">
                <Input
                  value={editedData.village}
                  onChange={(e) => handleInputChange("village", e.target.value)}
                  placeholder="Village"
                  className="w-24 h-8"
                />
                <Input
                  value={editedData.district}
                  onChange={(e) => handleInputChange("district", e.target.value)}
                  placeholder="District"
                  className="w-24 h-8"
                />
                <Select value={editedData.state || ""} onValueChange={(value) => handleInputChange("state", value)}>
                  <SelectTrigger className="w-32 h-8">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <span>
                {patient.village}, {patient.district}, {patient.state}
              </span>
            )}
          </div>
        </div>

        {/* Symptoms & Medical History */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>Current Symptoms</span>
            </h2>
            {isEditing ? (
              <Textarea
                value={editedData.symptoms}
                onChange={(e) => handleInputChange("symptoms", e.target.value)}
                rows={4}
                className="w-full"
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{patient.symptoms}</p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-green-600" />
              <span>Medical History</span>
            </h2>
            {isEditing ? (
              <Textarea
                value={editedData.medicalHistory}
                onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
                rows={4}
                className="w-full"
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{patient.medicalHistory}</p>
            )}
          </div>
        </div>

        {/* Medical Images */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <ImageIcon className="h-5 w-5 text-purple-600" />
              <span>Medical Images</span>
            </h2>
            {isEditing && (
              <div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload-edit"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("image-upload-edit").click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Add Images
                </Button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {editedData.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Medical image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border cursor-pointer hover:opacity-75 transition-opacity"
                />
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
                {!isEditing && (
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                      View Full Size
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Report with Regenerate */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-600" />
              <span>AI Medical Summary</span>
            </h2>
            <Button
              onClick={handleRegenerateReport}
              disabled={isRegeneratingReport}
              variant="outline"
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              <Brain className={`h-4 w-4 mr-2 ${isRegeneratingReport ? "animate-spin" : ""}`} />
              {isRegeneratingReport ? "Regenerating..." : "Regenerate Report"}
            </Button>
          </div>

          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <p className="text-gray-700 leading-relaxed">{patient.aiSummary}</p>
          </div>

          {isRegeneratingReport && (
            <div className="mt-4 flex items-center space-x-2 text-sm text-purple-600">
              <div className="animate-pulse flex space-x-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <span>AI is analyzing updated patient data...</span>
            </div>
          )}
        </div>

        {/* Assigned Doctor */}
        {patient.assignedDoctor && (
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Assigned Doctor</h2>
            <div className="flex items-center space-x-4">
              <img
                src={patient.assignedDoctor.avatar || "/placeholder.svg"}
                alt={patient.assignedDoctor.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">{patient.assignedDoctor.name}</h3>
                <p className="text-sm text-gray-600">{patient.assignedDoctor.specialty}</p>
              </div>
            </div>
          </div>
        )}

        {/* Send to Doctor Button - Only show if changes made or report regenerated */}
        {hasChanges && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-4">
                You have made changes to the patient details or regenerated the AI report. Send the updated information
                to a doctor for review.
              </p>
            </div>

            {!showDoctorSelection ? (
              <Button onClick={() => setShowDoctorSelection(true)} className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="h-5 w-5 mr-2" />
                Send Updated Case to Doctor
              </Button>
            ) : (
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Select Doctor</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {doctors?.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor.id)}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedDoctor === doctor.id
                          ? "border-blue-500 bg-blue-100"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={doctor.avatar || "/placeholder.svg"}
                          alt={doctor.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{doctor.name}</h4>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          <p className="text-xs text-gray-500">
                            {doctor.experience} • {doctor.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" onClick={() => setShowDoctorSelection(false)} className="flex-1">
                    Cancel
                  </Button>
                  <Button onClick={handleSendToDoctor} disabled={!selectedDoctor || isSending} className="flex-1">
                    {isSending ? (
                      <>
                        <Send className="h-4 w-4 mr-2 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send to Selected Doctor
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Send Confirmation Modal */}
      {showSendModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Updated Case Sent Successfully!</h3>
              <p className="text-gray-600">The updated patient case has been sent to the assigned doctor.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
