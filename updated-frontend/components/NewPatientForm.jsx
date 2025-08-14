"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Upload, Brain, Send, X, CheckCircle } from "lucide-react"

export default function NewPatientForm({ doctors, onPatientAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    village: "",
    district: "",
    state: "",
    symptoms: "",
    medicalHistory: "",
    images: [],
  })

  const [isGeneratingReport, setIsGeneratingReport] = useState(false)
  const [aiReport, setAiReport] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [showDoctorSelection, setShowDoctorSelection] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageUrls = files.map((file) => URL.createObjectURL(file))
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }))
  }

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const generateAIReport = () => {
    setIsGeneratingReport(true)
    // Simulate AI report generation
    setTimeout(() => {
      const report = `${formData.age}-year-old ${formData.gender.toLowerCase()} presenting with ${formData.symptoms.toLowerCase()}. Medical history significant for ${formData.medicalHistory || "no significant medical history"}. Based on the symptoms and patient profile, recommend immediate medical evaluation and appropriate diagnostic workup.`
      setAiReport(report)
      setIsGeneratingReport(false)
      setShowDoctorSelection(true)
    }, 3000)
  }

  const sendToDoctor = () => {
    if (!selectedDoctor) return

    setIsSending(true)
    setTimeout(() => {
      const newPatient = {
        id: `P${String(Date.now()).slice(-3)}`,
        ...formData,
        status: "awaiting_doctor", // Always start with awaiting_doctor
        priority: "Medium",
        aiSummary: aiReport,
        assignedDoctor: doctors.find((d) => d.id === selectedDoctor),
        doctorResponse: null,
        createdAt: new Date().toISOString(),
      }

      onPatientAdd(newPatient)
      setIsSending(false)
      setShowSuccess(true)

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          age: "",
          gender: "",
          phone: "",
          village: "",
          district: "",
          state: "",
          symptoms: "",
          medicalHistory: "",
          images: [],
        })
        setAiReport("")
        setSelectedDoctor("")
        setShowDoctorSelection(false)
        setShowSuccess(false)
      }, 2000)
    }, 1500)
  }

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

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center h-96">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Added Successfully!</h3>
              <p className="text-gray-600">The patient has been onboarded and sent to the doctor.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-6 w-6 text-blue-600" />
            <span>New Patient Onboarding</span>
          </CardTitle>
          <CardDescription>
            Fill in the patient details and generate an AI report for doctor consultation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter patient's full name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="Age"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              required
            />
          </div>

          {/* Location */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="village">Village/Area *</Label>
              <Input
                id="village"
                value={formData.village}
                onChange={(e) => handleInputChange("village", e.target.value)}
                placeholder="Village name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="district">District *</Label>
              <Input
                id="district"
                value={formData.district}
                onChange={(e) => handleInputChange("district", e.target.value)}
                placeholder="District name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Select onValueChange={(value) => handleInputChange("state", value)}>
                <SelectTrigger>
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
          </div>

          {/* Medical Information */}
          <div className="space-y-2">
            <Label htmlFor="symptoms">Current Symptoms *</Label>
            <Textarea
              id="symptoms"
              value={formData.symptoms}
              onChange={(e) => handleInputChange("symptoms", e.target.value)}
              placeholder="Describe the patient's current symptoms in detail..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalHistory">Medical History</Label>
            <Textarea
              id="medicalHistory"
              value={formData.medicalHistory}
              onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
              placeholder="Any previous medical conditions, surgeries, medications..."
              rows={2}
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label>Medical Images</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload medical images, reports, or X-rays</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById("image-upload").click()}>
                  Choose Files
                </Button>
              </div>
            </div>

            {formData.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Medical image ${index + 1}`}
                      className="w-full h-24 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Generate AI Report */}
          <div className="pt-4 border-t">
            <Button
              onClick={generateAIReport}
              disabled={!formData.name || !formData.symptoms || isGeneratingReport}
              className="w-full"
            >
              {isGeneratingReport ? (
                <>
                  <Brain className="h-4 w-4 mr-2 animate-spin" />
                  Generating AI Report...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Generate AI Report
                </>
              )}
            </Button>
          </div>

          {/* AI Report Display */}
          {aiReport && (
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span>AI Generated Report</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{aiReport}</p>
              </CardContent>
            </Card>
          )}

          {/* Doctor Selection */}
          {showDoctorSelection && (
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Select Doctor</CardTitle>
                <CardDescription>Choose a doctor to send this patient case to</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  {doctors.map((doctor) => (
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

                <Button onClick={sendToDoctor} disabled={!selectedDoctor || isSending} className="w-full">
                  {isSending ? (
                    <>
                      <Send className="h-4 w-4 mr-2 animate-pulse" />
                      Sending to Doctor...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send to Selected Doctor
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
