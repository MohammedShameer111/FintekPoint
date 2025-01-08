import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    graduationYear: '',
    location: '',
    employmentStatus: '',
    linkedinUrl: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Add submission logic here (e.g., API call)
  };

  return (
    <div className="job-application-form">
      <h2>Job Application</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-groups">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-groups">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-groups">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone */}
        <div className="form-groups">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Highest Level of Education */}
        <div className="form-groups">
          <label>Highest Level of Education:</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your education level
            </option>
            <option value="High School">High School</option>
            <option value="Associate Degree">Associate Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </div>

        {/* Year of Graduation */}
        <div className="form-groups">
          <label>Year of Graduation:</label>
          <input
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            placeholder="Enter year"
            required
          />
        </div>

        {/* Current Location */}
        <div className="form-groups">
          <label>Current Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
          />
        </div>

        {/* Employment Status */}
        <div className="form-groups">
          <label>Employment Status:</label>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your employment status
            </option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Student">Student</option>
          </select>
        </div>

        {/* LinkedIn URL */}
        <div className="form-groups">
          <label>LinkedIn URL:</label>
          <input
            type="url"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
            placeholder="Enter your LinkedIn profile URL"
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="form-groups">
          <label>Resume (PDF only):</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            required
          />
        </div>

        {/* Cover Letter */}
        <div className="form-groups">
          <label>Cover Letter:</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Write your cover letter"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-groups">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default Form;