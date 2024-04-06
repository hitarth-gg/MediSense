import React, { useState } from "react";
import axios from "axios";

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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/forms", formData);
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
      // Handle success notification or redirect to another page
    } catch (err) {
      console.error("Error:", err);
      // Handle error notification
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="input-field"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="input-field"
        />
        <select
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="pastHistory"
          value={formData.pastHistory}
          onChange={handleChange}
          placeholder="Past History of Diseases"
          className="input-field"
          required
        ></textarea>
        <textarea
          name="durationOfSymptoms"
          value={formData.durationOfSymptoms}
          onChange={handleChange}
          placeholder="Duration of Symptoms"
          className="input-field"
        ></textarea>
        <textarea
          name="physicalExamination"
          value={formData.physicalExamination}
          onChange={handleChange}
          placeholder="Physical Examination"
          className="input-field"
        ></textarea>
        <textarea
          name="presentCase"
          value={formData.presentCase}
          onChange={handleChange}
          placeholder="Present Case"
          className="input-field"
        ></textarea>
        <textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          placeholder="Remarks"
          className="input-field"
        ></textarea>
        <button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
