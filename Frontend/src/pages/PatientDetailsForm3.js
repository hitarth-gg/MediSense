import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  { toast } from "react-hot-toast";


export default function PatientDetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    pastHistory: "",
    durationOfSymptoms: "",
    physicalExamination: "",
    presentCase: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/formpush", formData);
      console.log(res.data);
      // Reset form data after successful submission
      setFormData({
        name: "",
        age: "",
        sex: "",
        pastHistory: "",
        durationOfSymptoms: "",
        physicalExamination: "",
        presentCase: "",
        remarks: "",
      });
      toast.success("Form submitted successfully");
      // Handle success notification or redirect to another page
    } catch (err) {
      console.error("Error:", err);
      // Handle error notification
    }
  };

  return (
    <div className="bg-transparent rounded-lg shadow-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="pastHistory"
            value={formData.pastHistory}
            onChange={handleChange}
            placeholder="Past History of Diseases"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required
          />
          <textarea
            name="durationOfSymptoms"
            value={formData.durationOfSymptoms}
            onChange={handleChange}
            placeholder="Duration of Symptoms"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-32"
            required
          ></textarea>
          <textarea
            name="physicalExamination"
            value={formData.physicalExamination}
            onChange={handleChange}
            placeholder="Physical Examination"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-32"
            required
          ></textarea>
          <textarea
            name="presentCase"
            value={formData.presentCase}
            onChange={handleChange}
            placeholder="Present Case"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-32"
            required
          ></textarea>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Remarks"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-32"
            required
          ></textarea>

          {/* http://127.0.0.1:5001/ */}

          <Link className="nav-link" to={"http://127.0.0.1:5001"}>
          <a
            className="relative rounded min-w-32 px-5 py-2.5 overflow-hidden group bg-[#4876ee] hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease pointer-events-none"></span>
            <span className="relative">Submit Image</span>
          </a>
          </Link>

          {/* <input
            type="file"
            name="medicalImages"
            onChange={handleImageChange}
            accept="image/*"
            className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          /> */}
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="relative rounded min-w-32 px-5 py-2.5 overflow-hidden group bg-[#4876ee] hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
        >
          Post Report
        </button>
      </form>
    </div>
  );
}
