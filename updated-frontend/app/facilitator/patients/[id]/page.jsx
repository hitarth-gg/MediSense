"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import PatientDetail from "@/components/PatientDetail"
import { ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"

export default function PatientDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [patient, setPatient] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load patient data
    fetch("/data/mockPatients.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPatient = data.patients.find((p) => p.id === params.id)
        setPatient(foundPatient)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error loading patient data:", err)
        setLoading(false)
      })
  }, [params.id])

  const handleStatusUpdate = (patientId, newStatus) => {
    setPatient((prev) => ({ ...prev, status: newStatus }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading patient details...</p>
        </div>
      </div>
    )
  }

  if (!patient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Patient Not Found</h1>
          <p className="text-gray-600 mb-6">The patient with ID "{params.id}" could not be found.</p>
          <Link
            href="/facilitator"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-blue-600">MediSense</span>
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/facilitator" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Patient Details</span>
            </div>
          </div>
        </div>
      </header>

      {/* Patient Detail */}
      <div className="max-w-4xl mx-auto">
        <PatientDetail patient={patient} onStatusUpdate={handleStatusUpdate} />
      </div>
    </div>
  )
}
