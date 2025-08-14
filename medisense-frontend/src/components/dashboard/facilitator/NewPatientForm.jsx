import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Textarea } from "../../ui/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/Select";
import { Label } from "../../ui/Label";

export default function NewPatientForm({ onSubmit, onCancel }) {
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
    priority: "Medium",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age || formData.age < 1 || formData.age > 120)
      newErrors.age = "Valid age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.village.trim()) newErrors.village = "Village is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.symptoms.trim())
      newErrors.symptoms = "Symptoms description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        id: `PAT-${Date.now()}`,
        status: "awaiting_doctor",
        createdAt: new Date().toISOString(),
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">
          New Patient Registration
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Fill in the patient details to create a new case
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-red-300" : ""}
                  placeholder="Enter patient's full name"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-300" : ""}
                  placeholder="Enter phone number"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  className={errors.age ? "border-red-300" : ""}
                  placeholder="Enter age"
                  min="1"
                  max="120"
                />
                {errors.age && (
                  <p className="text-sm text-red-600 mt-1">{errors.age}</p>
                )}
              </div>

              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
                  <SelectTrigger
                    className={errors.gender ? "border-red-300" : ""}
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-sm text-red-600 mt-1">{errors.gender}</p>
                )}
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Location Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="village">Village</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleInputChange("village", e.target.value)}
                  className={errors.village ? "border-red-300" : ""}
                  placeholder="Enter village name"
                />
                {errors.village && (
                  <p className="text-sm text-red-600 mt-1">{errors.village}</p>
                )}
              </div>

              <div>
                <Label htmlFor="district">District</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) =>
                    handleInputChange("district", e.target.value)
                  }
                  className={errors.district ? "border-red-300" : ""}
                  placeholder="Enter district name"
                />
                {errors.district && (
                  <p className="text-sm text-red-600 mt-1">{errors.district}</p>
                )}
              </div>

              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className={errors.state ? "border-red-300" : ""}
                  placeholder="Enter state name"
                />
                {errors.state && (
                  <p className="text-sm text-red-600 mt-1">{errors.state}</p>
                )}
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Medical Information
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="symptoms">Current Symptoms</Label>
                <Textarea
                  id="symptoms"
                  value={formData.symptoms}
                  onChange={(e) =>
                    handleInputChange("symptoms", e.target.value)
                  }
                  className={errors.symptoms ? "border-red-300" : ""}
                  placeholder="Describe the patient's current symptoms in detail"
                  rows={4}
                />
                {errors.symptoms && (
                  <p className="text-sm text-red-600 mt-1">{errors.symptoms}</p>
                )}
              </div>

              <div>
                <Label htmlFor="medicalHistory">
                  Medical History (Optional)
                </Label>
                <Textarea
                  id="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={(e) =>
                    handleInputChange("medicalHistory", e.target.value)
                  }
                  placeholder="Enter any relevant medical history, past treatments, or conditions"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="priority">Case Priority</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) =>
                    handleInputChange("priority", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High Priority</SelectItem>
                    <SelectItem value="Medium">Medium Priority</SelectItem>
                    <SelectItem value="Low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create Patient Case
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
