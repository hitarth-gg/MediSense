import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientQueue from "../../components/dashboard/facilitator/PatientQueue";
import PatientDetail from "../../components/dashboard/facilitator/PatientDetail";
import DoctorResponsePanel from "../../components/dashboard/facilitator/DoctorResponsePanel";
import NewPatientForm from "../../components/dashboard/facilitator/NewPatientForm";
import PatientHistory from "../../components/dashboard/facilitator/PatientHistory";
import FacilitatorProfile from "../../components/dashboard/facilitator/FacilitatorProfile";
import ActiveCasesOverview from "../../components/dashboard/facilitator/ActiveCasesOverview";
import NotificationSystem from "../../components/dashboard/facilitator/NotificationSystem";
import {
  Heart,
  Users,
  FileText,
  History,
  User,
  ChevronDown,
  LogOut,
  Settings,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FacilitatorDashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    // Mock data for now - replace with actual API calls later
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
          images: [
            "/placeholder.svg?height=200&width=200",
            "/placeholder.svg?height=200&width=200",
          ],
          status: "awaiting_doctor",
          priority: "High",
          createdAt: "2024-08-09T10:30:00Z",
          aiSummary:
            "45-year-old male presenting with respiratory symptoms including persistent cough, fever, and chest pain. Medical history significant for diabetes and hypertension. Symptoms suggest possible respiratory infection or pneumonia. Recommend immediate medical evaluation and chest imaging.",
          assignedDoctor: {
            id: "D001",
            name: "Dr. Priya Sharma",
            specialty: "General Medicine",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctorResponse: {
            diagnosis: "Upper Respiratory Tract Infection",
            prescription: [
              {
                medicine: "Azithromycin 500mg",
                dosage: "Once daily",
                duration: "5 days",
              },
              {
                medicine: "Paracetamol 650mg",
                dosage: "As needed for fever",
                duration: "5 days",
              },
            ],
            notes:
              "Rest, adequate hydration, and follow up if symptoms persist beyond 5 days.",
            nextConsultation: "2024-08-14T10:30:00Z",
          },
        },
        {
          id: "P002",
          name: "Sunita Devi",
          age: 32,
          gender: "Female",
          phone: "+91 87654 32109",
          village: "Bharatpur",
          district: "Varanasi",
          state: "Uttar Pradesh",
          symptoms: "Severe headache, nausea, dizziness for 2 days",
          medicalHistory: "No significant history",
          images: [],
          status: "video_scheduled",
          priority: "Medium",
          createdAt: "2024-08-09T14:15:00Z",
          aiSummary:
            "32-year-old female presenting with neurological symptoms including severe headache, nausea, and dizziness. No significant medical history. Symptoms require evaluation for possible migraine, tension headache, or other neurological conditions.",
          assignedDoctor: {
            id: "D002",
            name: "Dr. Amit Verma",
            specialty: "Neurology",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          scheduledCall: "2024-08-10T16:00:00Z",
        },
        {
          id: "P003",
          name: "Mohan Singh",
          age: 58,
          gender: "Male",
          phone: "+91 76543 21098",
          village: "Kushalnagar",
          district: "Kanpur",
          state: "Uttar Pradesh",
          symptoms: "Joint pain, swelling in knees, difficulty walking",
          medicalHistory: "Arthritis, High blood pressure",
          images: ["/placeholder.svg?height=200&width=200"],
          status: "completed",
          priority: "Low",
          createdAt: "2024-08-08T09:45:00Z",
          aiSummary:
            "58-year-old male with known arthritis presenting with increased joint pain and swelling in knees. History of hypertension. Symptoms consistent with arthritis flare-up.",
          assignedDoctor: {
            id: "D003",
            name: "Dr. Kavita Nair",
            specialty: "Orthopedics",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctorResponse: {
            diagnosis: "Osteoarthritis Exacerbation",
            prescription: [
              {
                medicine: "Ibuprofen 400mg",
                dosage: "Twice daily after meals",
                duration: "7 days",
              },
              {
                medicine: "Calcium + Vitamin D3",
                dosage: "Once daily",
                duration: "30 days",
              },
            ],
            notes:
              "Apply warm compress, gentle exercises, avoid prolonged standing.",
            followUp: "Monthly check-up recommended",
          },
        },
      ],
      doctors: [
        {
          id: "D001",
          name: "Dr. Priya Sharma",
          specialty: "General Medicine",
          avatar: "/placeholder.svg?height=40&width=40",
          status: "available",
          patients: 12,
        },
        {
          id: "D002",
          name: "Dr. Amit Verma",
          specialty: "Neurology",
          avatar: "/placeholder.svg?height=40&width=40",
          status: "busy",
          patients: 8,
        },
        {
          id: "D003",
          name: "Dr. Kavita Nair",
          specialty: "Orthopedics",
          avatar: "/placeholder.svg?height=40&width=40",
          status: "available",
          patients: 15,
        },
      ],
    };

    setPatients(mockData.patients);
    setDoctors(mockData.doctors);
  }, []);

  const handleLogout = () => {
    // Clear auth tokens and redirect
    localStorage.removeItem("authToken");
    navigate("/auth/facilitator/login");
  };

  const handleAddPatient = (newPatient) => {
    const patient = {
      ...newPatient,
      id: `P${String(patients.length + 1).padStart(3, "0")}`,
      status: "awaiting_doctor",
      createdAt: new Date().toISOString(),
    };
    setPatients([patient, ...patients]);
    setActiveTab("dashboard");
  };

  const handlePatientUpdate = (updatedPatient) => {
    setPatients(
      patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
    );
    setSelectedPatient(updatedPatient);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            <div className="lg:col-span-1">
              <PatientQueue
                patients={patients}
                selectedPatient={selectedPatient}
                onPatientSelect={setSelectedPatient}
              />
            </div>
            <div className="lg:col-span-2">
              {selectedPatient ? (
                <div className="grid grid-rows-2 gap-6 h-full">
                  <PatientDetail
                    patient={selectedPatient}
                    onUpdate={handlePatientUpdate}
                  />
                  <DoctorResponsePanel
                    patient={selectedPatient}
                    doctors={doctors}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Select a Patient
                    </h3>
                    <p className="text-gray-500">
                      Choose a patient from the queue to view details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case "new-patient":
        return (
          <NewPatientForm
            onSubmit={handleAddPatient}
            onCancel={() => setActiveTab("dashboard")}
          />
        );
      case "history":
        return (
          <PatientHistory
            patients={patients.filter((p) => p.status === "completed")}
          />
        );
      case "overview":
        return <ActiveCasesOverview patients={patients} doctors={doctors} />;
      case "profile":
        return <FacilitatorProfile />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-blue-600">
                  MediSense
                </span>
              </Link>
              <div className="text-gray-400">|</div>
              <span className="text-gray-600 font-medium">
                Facilitator Dashboard
              </span>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  1
                </span>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    Ravi Kumar
                  </p>
                  <p className="text-xs text-gray-500">Facilitator • F001</p>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100"
                  >
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                      <button
                        onClick={() => {
                          setActiveTab("profile");
                          setShowProfileMenu(false);
                        }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Profile Settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === "dashboard"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Active Cases</span>
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                3
              </span>
            </button>
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab("new-patient")}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === "new-patient"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>New Patient</span>
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === "history"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <History className="h-4 w-4" />
              <span>History</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderActiveTab()}
      </main>

      {/* Notification System */}
      <NotificationSystem />
    </div>
  );
}
