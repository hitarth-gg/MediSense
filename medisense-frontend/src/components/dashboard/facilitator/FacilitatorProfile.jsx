import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Edit,
  Save,
  X,
  Shield,
  Calendar,
  Award,
  Activity,
} from "lucide-react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Textarea } from "../../ui/Textarea";

export default function FacilitatorProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@medisense.com",
    phone: "+91 98765 43210",
    location: "Sitapur, Uttar Pradesh",
    qualification: "Bachelor of Public Health",
    experience: "3 years",
    specialization: "Community Health",
    languages: "Hindi, English, Urdu",
    bio: "Dedicated community health facilitator with 3 years of experience in rural healthcare delivery. Passionate about bridging the gap between patients and doctors through technology.",
    joinDate: "2021-08-15",
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    // Here you would typically save to an API
    console.log("Saving profile data:", editData);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  // Mock statistics
  const stats = {
    patientsRegistered: 156,
    casesCompleted: 89,
    monthlyTarget: 120,
    satisfaction: 98,
  };

  const achievements = [
    {
      title: "Top Performer",
      description: "Highest patient registration in Q2 2024",
      date: "2024-07-15",
      icon: Award,
    },
    {
      title: "Community Hero",
      description: "Successfully managed health camp for 200+ patients",
      date: "2024-06-10",
      icon: Activity,
    },
    {
      title: "Digital Health Pioneer",
      description: "First to implement telemedicine in district",
      date: "2024-05-01",
      icon: Shield,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Profile Settings
          </h2>
          {!isEditing ? (
            <Button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={handleCancel}
                className="flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </Button>
              <Button
                onClick={handleSave}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <div className="text-center">
              <div className="h-32 w-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {isEditing ? (
                  <Input
                    value={editData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="text-center"
                  />
                ) : (
                  profileData.name
                )}
              </h3>
              <p className="text-gray-600">Community Health Facilitator</p>
              <p className="text-sm text-gray-500 mt-1">
                Member since{" "}
                {new Date(profileData.joinDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email
                  </label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={editData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Phone
                  </label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Location
                  </label>
                  {isEditing ? (
                    <Input
                      value={editData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.location}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Professional Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification
                  </label>
                  {isEditing ? (
                    <Input
                      value={editData.qualification}
                      onChange={(e) =>
                        handleInputChange("qualification", e.target.value)
                      }
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.qualification}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience
                  </label>
                  {isEditing ? (
                    <Input
                      value={editData.experience}
                      onChange={(e) =>
                        handleInputChange("experience", e.target.value)
                      }
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.experience}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specialization
                  </label>
                  {isEditing ? (
                    <Input
                      value={editData.specialization}
                      onChange={(e) =>
                        handleInputChange("specialization", e.target.value)
                      }
                    />
                  ) : (
                    <p className="text-gray-900">
                      {profileData.specialization}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Languages
                  </label>
                  {isEditing ? (
                    <Input
                      value={editData.languages}
                      onChange={(e) =>
                        handleInputChange("languages", e.target.value)
                      }
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.languages}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              {isEditing ? (
                <Textarea
                  value={editData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={4}
                />
              ) : (
                <p className="text-gray-900">{profileData.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Statistics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Performance Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {stats.patientsRegistered}
            </p>
            <p className="text-sm text-gray-600">Patients Registered</p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Activity className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {stats.casesCompleted}
            </p>
            <p className="text-sm text-gray-600">Cases Completed</p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {stats.monthlyTarget}
            </p>
            <p className="text-sm text-gray-600">Monthly Target</p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {stats.satisfaction}%
            </p>
            <p className="text-sm text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Achievements & Recognition
        </h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <achievement.icon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(achievement.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
