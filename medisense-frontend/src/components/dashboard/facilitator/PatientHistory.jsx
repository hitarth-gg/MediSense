import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  FileText,
  Filter,
  Download,
} from "lucide-react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/Select";

export default function PatientHistory({ patients }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const getFilteredAndSortedPatients = () => {
    let filtered = patients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesDate = true;
      if (dateFilter !== "all") {
        const patientDate = new Date(patient.createdAt);
        const now = new Date();

        switch (dateFilter) {
          case "today":
            matchesDate = patientDate.toDateString() === now.toDateString();
            break;
          case "week": {
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            matchesDate = patientDate >= weekAgo;
            break;
          }
          case "month": {
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            matchesDate = patientDate >= monthAgo;
            break;
          }
          default:
            matchesDate = true;
        }
      }

      return matchesSearch && matchesDate;
    });

    // Sort patients
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredPatients = getFilteredAndSortedPatients();

  const handleExportData = () => {
    console.log("Exporting patient history data");
    // Handle export functionality
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-100";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "Low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Patient History
          </h2>
          <Button
            onClick={handleExportData}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </Button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Past Week</SelectItem>
              <SelectItem value="month">Past Month</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>

          {(searchTerm || dateFilter !== "all") && (
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setDateFilter("all");
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{filteredPatients.length} completed cases found</span>
          {(searchTerm || dateFilter !== "all") && (
            <span>Filtered from {patients.length} total cases</span>
          )}
        </div>
      </div>

      {/* Patient List */}
      <div className="divide-y divide-gray-200">
        {filteredPatients.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <FileText className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">No completed cases found</p>
            <p>Try adjusting your search filters</p>
          </div>
        ) : (
          filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="p-6 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {patient.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {patient.age} • {patient.gender} • {patient.id}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                        patient.priority
                      )}`}
                    >
                      {patient.priority}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-2">{patient.symptoms}</p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>
                        {patient.village}, {patient.district}
                      </span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(patient.createdAt).toLocaleDateString()}
                      </span>
                    </span>
                    {patient.assignedDoctor && (
                      <span className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>Dr. {patient.assignedDoctor.name}</span>
                      </span>
                    )}
                  </div>

                  {/* Doctor Response Summary */}
                  {patient.doctorResponse && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Diagnosis
                          </p>
                          <p className="text-sm text-gray-600">
                            {patient.doctorResponse.diagnosis}
                          </p>
                        </div>
                        {patient.doctorResponse.prescription && (
                          <div>
                            <p className="text-sm font-medium text-gray-900 mb-1">
                              Prescription
                            </p>
                            <div className="text-sm text-gray-600">
                              {patient.doctorResponse.prescription
                                .slice(0, 2)
                                .map((med, index) => (
                                  <div key={index}>• {med.medicine}</div>
                                ))}
                              {patient.doctorResponse.prescription.length >
                                2 && (
                                <div>
                                  +{" "}
                                  {patient.doctorResponse.prescription.length -
                                    2}{" "}
                                  more
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {patient.doctorResponse.notes && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Notes
                          </p>
                          <p className="text-sm text-gray-600">
                            {patient.doctorResponse.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination would go here if needed */}
      {filteredPatients.length > 0 && (
        <div className="p-6 border-t bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredPatients.length} of {patients.length} completed
              cases
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
