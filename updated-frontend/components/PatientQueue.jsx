"use client"

import PatientCard from "./PatientCard"
import { Search, Filter, SortAsc, SortDesc, Calendar, User, AlertTriangle } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function PatientQueue({ patients, selectedPatient, onPatientSelect }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")
  const [viewMode, setViewMode] = useState("all")

  const filteredAndSortedPatients = patients
    .filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.village.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || patient.status === statusFilter
      const matchesPriority = priorityFilter === "all" || patient.priority === priorityFilter

      const matchesView =
        viewMode === "all" ||
        (viewMode === "active" && patient.status !== "completed") ||
        (viewMode === "completed" && patient.status === "completed")

      return matchesSearch && matchesStatus && matchesPriority && matchesView
    })
    .sort((a, b) => {
      let aValue, bValue

      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case "age":
          aValue = Number.parseInt(a.age)
          bValue = Number.parseInt(b.age)
          break
        case "priority":
          const priorityOrder = { High: 3, Medium: 2, Low: 1 }
          aValue = priorityOrder[a.priority] || 0
          bValue = priorityOrder[b.priority] || 0
          break
        case "status":
          aValue = a.status
          bValue = b.status
          break
        case "date":
        default:
          aValue = new Date(a.createdAt)
          bValue = new Date(b.createdAt)
          break
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  const getStatusCount = (status) => {
    return patients.filter((p) => p.status === status).length
  }

  const getPriorityCount = (priority) => {
    return patients.filter((p) => p.priority === priority).length
  }

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Patient Queue</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={toggleSortOrder} className="p-2 bg-transparent">
              {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients, ID, or village..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            aria-label="Search patients"
          />
        </div>

        {/* View Mode Tabs */}
        <div className="flex space-x-1 mb-4 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("all")}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              viewMode === "all" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All ({patients.length})
          </button>
          <button
            onClick={() => setViewMode("active")}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              viewMode === "active" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Active ({patients.filter((p) => p.status !== "completed").length})
          </button>
          <button
            onClick={() => setViewMode("completed")}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              viewMode === "completed" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Done ({getStatusCount("completed")})
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="awaiting_doctor">Awaiting ({getStatusCount("awaiting_doctor")})</SelectItem>
              <SelectItem value="video_scheduled">Video ({getStatusCount("video_scheduled")})</SelectItem>
              <SelectItem value="completed">Completed ({getStatusCount("completed")})</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="High">High ({getPriorityCount("High")})</SelectItem>
              <SelectItem value="Medium">Medium ({getPriorityCount("Medium")})</SelectItem>
              <SelectItem value="Low">Low ({getPriorityCount("Low")})</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date Added</span>
                </div>
              </SelectItem>
              <SelectItem value="name">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Name</span>
                </div>
              </SelectItem>
              <SelectItem value="age">Age</SelectItem>
              <SelectItem value="priority">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Priority</span>
                </div>
              </SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto">
        {filteredAndSortedPatients.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            <div className="mb-2">No patients found</div>
            <div className="text-sm">Try adjusting your search or filters</div>
          </div>
        ) : (
          <div className="space-y-2 p-2">
            {filteredAndSortedPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                isSelected={selectedPatient?.id === patient.id}
                onClick={() => onPatientSelect(patient)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Queue Summary */}
      <div className="p-3 border-t bg-gray-50 text-xs text-gray-600">
        <div className="flex justify-between">
          <span>
            Showing {filteredAndSortedPatients.length} of {patients.length}
          </span>
          <span>{getPriorityCount("High")} high priority</span>
        </div>
      </div>
    </div>
  )
}
