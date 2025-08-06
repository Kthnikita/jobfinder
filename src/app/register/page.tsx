'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || !email || !pass) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    const obj = {
      name,
      email,
      password: pass,
      role
    };

    try {
      const res = await fetch("http://localhost:3000/api/userauth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      });

      const data = await res.json();

      if (data.success) {
        alert("Signup successful!");
        window.location.href='/'
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-[500px] h-[550px] bg-white shadow-lg rounded-lg flex overflow-hidden">
        <div className="w-full p-6 flex flex-col gap-6">
          <div className="flex justify-end text-sm text-gray-500">
            <p className="mr-2">Already have an account?</p>
            <Link href="/login" className="text-blue-600 hover:underline">Sign In</Link>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome to JobFinder!</h1>
            <p className="text-sm text-gray-500 mb-6">Register your account below</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="femail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="femail"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="fpass"
                  placeholder="Enter password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}
              {loading ? (
                <div className="text-blue-700 text-center">Submitting...</div>
              ) : (
                <button
                  type="submit"
                  className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
