'use client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';

import React, { FormEvent, useState } from 'react'
import { json } from 'stream/consumers';

function page() {
    const param =useSearchParams();
    const id=param.get('id');
    console.log(id);
   const router = useRouter();
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [pass, setpass] = useState<string>("");
  const [role,setrole]=useState("user")
  const [error, seterror] = useState("");

  async function handelsubmit(e: FormEvent) {
    e.preventDefault();
    const obj={
      name,
      email,
      password:pass,
      role
    }
    const req=await fetch("http://localhost:3000/api/userauth/editprofile",{
      method:"POST",
      body:JSON.stringify({
        id,
        data:obj
      })
    })
    const resp=await req.json();
    if(resp.success){
        alert("edited")
    }
  }
  return (
    <div>
      <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-[500px] h-[500px] bg-white shadow-lg rounded-lg flex overflow-hidden">

    
        <div className="w-full p-6 flex flex-col gap-6">

          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome to JobFinder!</h1>
            <p className="text-sm text-gray-500 mb-6">Edit your account below</p>

            <form onSubmit={handelsubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  id="fname"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="femail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  id="femail"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  id="fpass"
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
               <div>
               <select  value={role} onChange={(e)=>setrole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
               </select>
              </div>
              {error && (
                <div className="text-red-500 text-sm mt-1">{error}</div>
              )}

              <button
                type="submit"
                className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div> 
  )
}

export default page
