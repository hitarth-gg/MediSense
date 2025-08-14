import React, { useState } from "react";
import PatientCard from "./PatientCard";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

export default function PatientQueue({
  patients,
  selectedPatient,
  onPatientSelect,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredPatients = () => {
    return patients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  };

  const filteredPatients = getFilteredPatients();
  const activePatients = filteredPatients.filter(
    (p) => p.status !== "completed"
  );
  const completedPatients = filteredPatients.filter(
    (p) => p.status === "completed"
  );

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Patient Queue</h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-1"
          >
            <Filter className="h-4 w-4" />
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search patients, ID, or village"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>
      </div>

      {/* Status Tabs */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex space-x-6">
          <button className="flex items-center space-x-2 text-blue-600 border-b-2 border-blue-600 pb-2">
            <span className="text-sm font-medium">
              All ({filteredPatients.length})
            </span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 pb-2">
            <span className="text-sm">Active ({activePatients.length})</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 pb-2">
            <span className="text-sm">Done ({completedPatients.length})</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-3 border-b border-gray-200 bg-gray-50">
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" className="text-xs">
            All Status <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            All Priority <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Filter className="h-3 w-3" />
            <span>
              Date Added <ChevronDown className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto">
        {filteredPatients.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-gray-500">
            <p>No patients match your search</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredPatients.map((patient) => (
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
    </div>
  );
}
