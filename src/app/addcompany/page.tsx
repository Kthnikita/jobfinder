//@ts-nocheck
'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

function page() {
    const [name, setname ]= useState<string>("");
      const [des, setdes] = useState<string>("");
    //   const[ownerid,setownerid]=useState("")
      const [img, setimg] = useState("");
      const[loading,setloading]=useState(false);
      const router=useRouter();
      async function handelsubmit(e:FormEvent){
         e.preventDefault();
         const obj={
            name,
            des,
            img
            
         }
        const request=await fetch("http://localhost:3000/api/company",{
            method:"POST",
            body:JSON.stringify(obj)
        })
        
      }
  return (
    <div>
       <div>
      <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-[500px] h-[500px] bg-white shadow-lg rounded-lg flex overflow-hidden">

    
        <div className="w-full p-6 flex flex-col gap-6">

          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome to JobFinder!</h1>
            <p className="text-sm text-gray-500 mb-6">Add a Company</p>

            <form  className="flex flex-col gap-4" onSubmit={handelsubmit}>
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  id="fname"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
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

              {/* <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">ID</label>
                <input
                   type="text"
                  placeholder="Enter password"
                  id="fpass"
                  value={ownerid}
                  onChange={(e)=>setownerid(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div> */}
              <div>
                <label htmlFor="fpass" className="block text-sm font-medium text-gray-700">Image_url</label>
                <input
                   type="text"
                  placeholder="Enter password"
                  id="fpass"
                  value={img}
                  onChange={(e)=>setimg(e.target.value)}
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
