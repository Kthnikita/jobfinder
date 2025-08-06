// @ts-nocheck
'use client'

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

function Page() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

   
    if (!name || !description || !imageUrl) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const obj = {
        name,
        des: description,
        img: imageUrl,
      };

      const res = await fetch("http://localhost:3000/api/company", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      const data = await res.json();

      if (data.success) {
        alert("Company added successfully!");
        window.location.href="/"
      } else {
        setError(data.message || "Something went wrong");
      }

    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-[500px] h-fit bg-white shadow-lg rounded-lg overflow-hidden p-6">

        <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome to JobFinder!</h1>
        <p className="text-sm text-gray-500 mb-4">Add a Company</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
