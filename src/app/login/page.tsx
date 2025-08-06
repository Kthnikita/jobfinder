'use client'
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
function page() {
   const router=useRouter();
    const[email,setemail]=useState<string>("");
    const[pass,setpass]=useState<string>("");
    const[error,seterror]=useState("")
    const[loading,setloading]=useState(false)
   async function handelsubmit(e:FormEvent){
        e.preventDefault();
          if (!email || !pass) {
    seterror("Email and password are required.");
   
    return;
  }
       const obj={
        email,
        pass
       }
       const req=await fetch("http://localhost:3000/api/userauth/login",{
      method:"POST",
      body:JSON.stringify(obj)
    })
    const resp=await req.json();
    const user=resp.success;
    if(user){
      alert("loggedin")
      window.location.href = "/";
    }
    else{
      alert(":/")
    }
    }
  return (
    <div>
       <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-[400px] h-[400px] bg-white shadow-lg rounded-lg flex overflow-hidden">
        
       
        
    
        <div className="w-full p-6 flex flex-col gap-6">
         
          <div className="flex justify-end text-sm text-gray-500">
            <p className="mr-2">Doesn't have an account?</p>
            <Link href="/register" className="text-blue-600 hover:underline">Sign up</Link>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome Back!💙</h1>
            <p className="text-sm text-gray-500 mb-6">Login to your account below</p>

            <form onSubmit={handelsubmit} className="flex flex-col gap-4">

              <div>
                <label htmlFor="femail" className="block text-sm font-medium  text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  id="femail"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
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
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm mt-1">{error}</div>
              )}

            {loading?<div className="text-black mt-2 py-2">Loading...</div>:  <button
               
                className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
              >
                Login
              </button>}
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
