"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PatientQueue from "@/components/PatientQueue"
import PatientDetail from "@/components/PatientDetail"
import DoctorResponsePanel from "@/components/DoctorResponsePanel"
import NewPatientForm from "@/components/NewPatientForm"
import PatientHistory from "@/components/PatientHistory"
import FacilitatorProfile from "@/components/FacilitatorProfile"
import ActiveCasesOverview from "@/components/ActiveCasesOverview"
import NotificationSystem from "@/components/NotificationSystem"
import { Heart, Users, FileText, History, User, ChevronDown, LogOut, Settings } from "lucide-react"
import Link from "next/link"

export default function FacilitatorDashboard() {
  const router = useRouter()
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  useEffect(() => {
    // Mock data directly in component to avoid fetch issues
    const mockData = {
      patients: [
        {
          id: "P001",
          name: "Rajesh Kumar",
          age: 45,
          gender: "Male",
          phone: "+91 98765 43210",
          village: "Rampur",
          district: "Sitapur",
          state: "Uttar Pradesh",
          symptoms: "Persistent cough, fever for 3 days, chest pain",
          medicalHistory: "Diabetes, Hypertension",
          images: ["/placeholder.svg?height=200&width=200", "/placeholder.svg?height=200&width=200"],
          status: "awaiting_doctor",
          priority: "High",
          aiSummary:
            "45-year-old male presenting with respiratory symptoms including persistent cough, fever, and chest pain. Medical history significant for diabetes and hypertension. Symptoms suggest possible respiratory infection or pneumonia. Recommend immediate medical evaluation and chest imaging.",
          assignedDoctor: {
            id: "D001",
            name: "Dr. Priya Sharma",
            specialty: "General Medicine",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctorResponse: {
            prescription:
              "Tab. Azithromycin 500mg OD x 5 days, Tab. Paracetamol 650mg TDS, Syrup Salbutamol 5ml TDS. Complete bed rest and adequate fluid intake.",
            action: "prescription_given",
            notes: "Monitor temperature. Return if symptoms worsen.",
            timestamp: "2024-01-15T10:30:00Z",
          },
          createdAt: "2024-01-15T08:00:00Z",
        },
        {
          id: "P002",
          name: "Sunita Devi",
          age: 32,
          gender: "Female",
          phone: "+91 87654 32109",
          village: "Kishanganj",
          district: "Purnia",
          state: "Bihar",
          symptoms: "Severe abdominal pain, nausea, vomiting since morning",
          medicalHistory: "Previous C-section delivery",
          images: ["/placeholder.svg?height=200&width=200"],
          status: "video_scheduled",
          priority: "High",
          aiSummary:
            "32-year-old female with acute abdominal pain, nausea, and vomiting. History of previous C-section. Symptoms concerning for possible appendicitis, ovarian cyst, or adhesions. Requires urgent medical evaluation.",
          assignedDoctor: {
            id: "D002",
            name: "Dr. Amit Verma",
            specialty: "Surgery",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctorResponse: {
            prescription: "",
            action: "request_video",
            notes: "Urgent video consultation required. Possible surgical intervention needed.",
            videoScheduled: {
              date: "2024-01-15",
              time: "14:00",
              joinUrl: "https://meet.medisense.com/room/P002-urgent",
            },
            timestamp: "2024-01-15T11:15:00Z",
          },
          createdAt: "2024-01-15T09:30:00Z",
        },
        {
          id: "P003",
          name: "Mohan Singh",
          age: 28,
          gender: "Male",
          phone: "+91 76543 21098",
          village: "Dholpur",
          district: "Dholpur",
          state: "Rajasthan",
          symptoms: "Skin rash on arms and legs, itching, mild fever",
          medicalHistory: "No significant medical history",
          images: ["/placeholder.svg?height=200&width=200", "/placeholder.svg?height=200&width=200"],
          status: "completed",
          priority: "Medium",
          aiSummary:
            "28-year-old male presenting with skin rash on extremities with associated itching and mild fever. No significant medical history. Likely allergic reaction or contact dermatitis. Recommend antihistamines and topical treatment.",
          assignedDoctor: {
            id: "D003",
            name: "Dr. Kavita Patel",
            specialty: "Dermatology",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctorResponse: {
            prescription:
              "Tab. Cetirizine 10mg OD x 7 days, Calamine lotion for local application BD, Tab. Prednisolone 10mg OD x 3 days",
            action: "prescription_given",
            notes: "Avoid known allergens. Follow up if rash persists after 1 week.",
            timestamp: "2024-01-14T16:45:00Z",
          },
          createdAt: "2024-01-14T14:20:00Z",
        },
        {
          id: "P004",
          name: "Priya Gupta",
          age: 35,
          gender: "Female",
          phone: "+91 99887 76543",
          village: "Khandwa",
          district: "Khandwa",
          state: "Madhya Pradesh",
          symptoms: "Headache, dizziness, blurred vision for 2 weeks",
          medicalHistory: "Hypertension, family history of diabetes",
          images: ["/placeholder.svg?height=200&width=200"],
          status: "awaiting_doctor",
          priority: "Medium",
          aiSummary:
            "35-year-old female with chronic headache, dizziness, and visual disturbances. Known hypertensive with family history of diabetes. Symptoms may indicate uncontrolled hypertension or developing complications.",
          assignedDoctor: {
            id: "D001",
            name: "Dr. Priya Sharma",
            specialty: "General Medicine",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctorResponse: null,
          createdAt: "2024-01-16T07:15:00Z",
        },
        {
          id: "P005",
          name: "Arjun Patel",
          age: 22,
          gender: "Male",
          phone: "+91 88776 65432",
          village: "Anand",
          district: "Anand",
          state: "Gujarat",
          symptoms: "Joint pain in knees and ankles, morning stiffness",
          medicalHistory: "No significant medical history",
          images: ["/placeholder.svg?height=200&width=200", "/placeholder.svg?height=200&width=200"],
          status: "completed",
          priority: "Low",
          aiSummary:
            "22-year-old male with joint pain and morning stiffness affecting knees and ankles. No significant medical history. Symptoms suggest possible inflammatory arthritis or overuse injury.",
          assignedDoctor: {
            id: "D004",
            name: "Dr. Rajesh Gupta",
            specialty: "Orthopedics",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctorResponse: {
            prescription: "Tab. Ibuprofen 400mg BD x 7 days, Hot water fomentation, Physiotherapy exercises",
            action: "prescription_given",
            notes: "Continue exercises. Return if pain persists beyond 2 weeks.",
            timestamp: "2024-01-13T14:20:00Z",
          },
          createdAt: "2024-01-13T11:45:00Z",
        },
      ],
      doctors: [
        {
          id: "D001",
          name: "Dr. Priya Sharma",
          specialty: "General Medicine",
          experience: "8 years",
          location: "Delhi",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "D002",
          name: "Dr. Amit Verma",
          specialty: "Surgery",
          experience: "12 years",
          location: "Mumbai",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "D003",
          name: "Dr. Kavita Patel",
          specialty: "Dermatology",
          experience: "6 years",
          location: "Ahmedabad",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "D004",
          name: "Dr. Rajesh Gupta",
          specialty: "Orthopedics",
          experience: "10 years",
          location: "Jaipur",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "D005",
          name: "Dr. Meera Joshi",
          specialty: "Pediatrics",
          experience: "7 years",
          location: "Pune",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "D006",
          name: "Dr. Suresh Kumar",
          specialty: "Cardiology",
          experience: "15 years",
          location: "Bangalore",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    }

    setPatients(mockData.patients)
    setDoctors(mockData.doctors)
    setSelectedPatient(mockData.patients[0])
  }, [])

  // Simulate doctor status changes for demo
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly change a patient's status to demonstrate notifications
      setPatients((prev) => {
        const awaitingPatients = prev.filter((p) => p.status === "awaiting_doctor")
        if (awaitingPatients.length > 0 && Math.random() > 0.95) {
          const randomPatient = awaitingPatients[Math.floor(Math.random() * awaitingPatients.length)]
          const newStatus = Math.random() > 0.5 ? "video_scheduled" : "completed"

          return prev.map((p) =>
            p.id === randomPatient.id
              ? {
                  ...p,
                  status: newStatus,
                  doctorResponse: {
                    ...p.doctorResponse,
                    timestamp: new Date().toISOString(),
                    action: newStatus === "video_scheduled" ? "request_video" : "prescription_given",
                    ...(newStatus === "video_scheduled" && {
                      videoScheduled: {
                        date: new Date().toISOString().split("T")[0],
                        time: "14:00",
                        joinUrl: `https://meet.medisense.com/room/${p.id}-consultation`,
                      },
                    }),
                  },
                }
              : p,
          )
        }
        return prev
      })
    }, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient)
  }

  const handleStatusUpdate = (patientId, newStatus) => {
    setPatients((prev) => prev.map((p) => (p.id === patientId ? { ...p, status: newStatus } : p)))
    if (selectedPatient?.id === patientId) {
      setSelectedPatient((prev) => ({ ...prev, status: newStatus }))
    }
  }

  const handlePatientAdd = (newPatient) => {
    setPatients((prev) => [newPatient, ...prev])
    setSelectedPatient(newPatient)
    setActiveTab("dashboard")
  }

  const handlePatientUpdate = (updatedPatient) => {
    setPatients((prev) => prev.map((p) => (p.id === updatedPatient.id ? updatedPatient : p)))
    setSelectedPatient(updatedPatient)
  }

  const handleLogout = () => {
    router.push("/auth/facilitator/login")
  }

  const activeCases = patients.filter((p) => p.status !== "completed")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-blue-600">MediSense</span>
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-lg font-semibold text-gray-700">Facilitator Dashboard</span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <NotificationSystem patients={patients} />

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Ravi Kumar</p>
                    <p className="text-xs text-gray-500">Facilitator • F001</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setActiveTab("profile")
                          setShowProfileMenu(false)
                        }}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User className="h-4 w-4" />
                        <span>View Profile</span>
                      </button>
                      <button
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </button>
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "dashboard"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Active Cases</span>
                {activeCases.length > 0 && (
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">{activeCases.length}</span>
                )}
              </div>
            </button>
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Overview</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("onboard")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "onboard"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>New Patient</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "history"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <History className="h-4 w-4" />
                <span>History</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {activeTab === "dashboard" && (
        <div className="flex h-[calc(100vh-140px)]">
          {/* Left Panel - Patient Queue */}
          <div className="w-1/4 bg-white border-r overflow-y-auto">
            <PatientQueue patients={patients} selectedPatient={selectedPatient} onPatientSelect={handlePatientSelect} />
          </div>

          {/* Center Panel - Patient Detail */}
          <div className="flex-1 overflow-y-auto">
            {selectedPatient ? (
              <PatientDetail
                patient={selectedPatient}
                onStatusUpdate={handleStatusUpdate}
                doctors={doctors}
                onPatientUpdate={handlePatientUpdate}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-600 mb-2">Select a patient to view details</p>
                  <p className="text-sm text-gray-500">
                    Choose a patient from the queue to see their information and medical history
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Doctor Response */}
          <div className="w-1/4 bg-white border-l overflow-y-auto">
            {selectedPatient && <DoctorResponsePanel patient={selectedPatient} />}
          </div>
        </div>
      )}

      {activeTab === "overview" && <ActiveCasesOverview patients={patients} />}

      {activeTab === "onboard" && <NewPatientForm doctors={doctors} onPatientAdd={handlePatientAdd} />}

      {activeTab === "history" && <PatientHistory patients={patients} />}

      {activeTab === "profile" && <FacilitatorProfile onLogout={handleLogout} />}

      {/* Click outside to close profile menu */}
      {showProfileMenu && <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)} />}
    </div>
  )
}
