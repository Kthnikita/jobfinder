'use client';
import React, { FormEvent, useContext, useState } from 'react';
import { context } from '../layout';

function AddJobPage() {
  const [title, setTitle] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [employment, setEmployment] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const { user } = useContext(context);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    
    if (!title || !des || !location || !salary || !employment || !jobType) {
      setMessage("All fields are required.");
      return;
    }

    const parsedSalary = parseInt(salary);
    if (isNaN(parsedSalary)) {
      setMessage("Salary must be a valid number.");
      return;
    }

    setLoading(true);
    setMessage("");

    const data = {
      title,
      description: des,
      location,
      salary: parsedSalary,
      employement_type: employment,
      job_type: jobType,
      comp_id: user?.company?.id
    };

    try {
      const response = await fetch("http://localhost:3000/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success) {
        setMessage("Job posted successfully!");
       
        setTitle(""); setDes(""); setLocation(""); setSalary("");
        setEmployment(""); setJobType("");
      } else {
        setMessage(result.message || "Failed to post job.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-[500px] bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome to JobFinder!</h1>
        <p className="text-sm text-gray-500 mb-4">Add a job below</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="job-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter job title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              id="description"
              type="text"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Job description"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Job location"
            />
          </div>

          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
            <input
              id="salary"
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Salary in numbers"
            />
          </div>

          <div>
            <label htmlFor="employment" className="block text-sm font-medium text-gray-700">Employment Type</label>
            <input
              id="employment"
              type="text"
              value={employment}
              onChange={(e) => setEmployment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Full-time"
            />
          </div>

          <div>
            <label htmlFor="job-type" className="block text-sm font-medium text-gray-700">Job Type</label>
            <input
              id="job-type"
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Remote"
            />
          </div>

          {message && (
            <div className={`text-sm mt-1 ${message.includes("success") ? "text-green-600" : "text-red-500"}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200 disabled:bg-blue-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddJobPage;
