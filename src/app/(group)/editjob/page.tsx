
'use client'
import React, { FormEvent, useContext, useState } from 'react'
import { context } from '../layout';
import { useSearchParams } from 'next/navigation';

function page() {
    const sp=useSearchParams();
    const id=sp.get('id');
    const [title, settitle ]= useState<string>("");
      const [des, setdes] = useState<string>("");
      const[location,setloaction]=useState("")
      const [salary, setsalary] = useState<string>('');
      const[employement,setemployment]=useState("");
      const[jobtype,setjobtype]=useState("")
      const[loading,setloading]=useState(false);
    const {user,setuser}=useContext(context)
      async function handelsubmit(e:FormEvent){
         e.preventDefault();
        const parsesalary=Number.parseInt(salary)
        const data={
           title,
           description:des,
           location,
           salary:parsesalary,
           employement_type:employement,
           job_type:jobtype,
           comp_id:user?.company.id
        }
        const request=await fetch("http://localhost:3000/api/job/updjob",{
            method:"POST",
            body:JSON.stringify({
                id,
                data:data
            })
        })
      }
  return (
    <div>
       <div>
      <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-[500px] h-[650px] bg-white shadow-lg rounded-lg flex overflow-hidden">

    
        <div className="w-full p-6 flex flex-col gap-6">

          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome to JobFinder!</h1>
            <p className="text-sm text-gray-500 mb-6">Add a job</p>

            <form  className="flex flex-col gap-4" onSubmit={handelsubmit}>
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  id="fname"
                  value={title}
                  onChange={(e)=>settitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="femail" className="block text-sm font-medium text-gray-700">Description</label>
                <input
                   type="text"
                  placeholder="Enter email"
                  id="femail"
                 value={des}
                 onChange={(e)=>setdes(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                   type="text"
                  placeholder="Enter password"
                  id="fpass"
                  value={location}
                  onChange={(e)=>setloaction(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                   type="text"
                  placeholder="Enter password"
                  id="fpass"
                  value={salary}
                  onChange={(e)=>setsalary(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">employement</label>
                <input
                   type="text"
                  placeholder="Enter password"
                  id="fpass"
                  value={employement}
                  onChange={(e)=>setemployment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">job_type</label>
                <input
                   type="text"
                  placeholder="Enter password"
                  id="fpass"
                  value={jobtype}
                  onChange={(e)=>setjobtype(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* {error && (
                <div className="text-red-500 text-sm mt-1">{error}</div>
              )} */}

              <button
                
                className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div> 
    </div>
  )
}

export default page

