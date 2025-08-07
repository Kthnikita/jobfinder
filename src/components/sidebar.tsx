
'use client'
import { CheckboxGroup } from '@radix-ui/themes';
import React, { useState } from 'react';
import { FunnelX } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
//gte work with number and salary for greater than
function Sidebar() {
  const router=useRouter()
  const search =useSearchParams();
  const pg=search.get('page')||1;
  const q=search.get('q')||'';
  const loc=search.get('loc')||'';
  const jobtype=search.get('jt')?.split(",")||[];
  const emptype=search.get('et')?.split(",")||[];
  const sal=search.get('sal')||'';
  const[location,setlocation]=useState(loc);
  const[job_type,setjobtype]=useState(jobtype);
  const[emp_type,setemptype]=useState(emptype)
  const[salary,setsalary]=useState<any>(sal);
  const[page,setpage]=useState<any>(pg);
  const[filteropen,setfilteropen]=useState<boolean>(false)
  function handelreset(){
       setlocation('');
       setjobtype([]);
       setemptype([]);
       setsalary('');
  }
  function handelfilter(){
    let url=`/search?q=${q}`
      if(location){
        url=url+`&loc=${location}`
      }
      if(job_type.length!=0){
        url=url+`&jt=${job_type.join(",")}`
      }
      if(emp_type.length!=0){
        url=url+`&et=${emp_type.join(",")}`
      }
      if(salary){
        url=url+`&sal=${salary}`
      }
      url=url+`&page=${page}`
   router.push(url);
  }
  return (
   <>
   <div className={`w-full sm:w-64 p-6 bg-white shadow-lg rounded-md mt-6 flex flex-col gap-4 border border-gray-200 ${filteropen?"block z-50":"hidden"} md:flex-col`}>
    
      <h1 className="text-lg font-semibold flex items-center text-blue-900 justify-between">
        <div className='flex gap-2'>
          <FunnelX size={20} />
        Filter
        </div>
        <button className='md:hidden' onClick={()=>{setfilteropen(false)}}>❌</button>
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="e.g. Delhi"
          className="border rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={location}
          onChange={(e)=>setlocation(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Job Type</label>
        <div className="border rounded px-3 py-2 space-y-1">
          <CheckboxGroup.Root  name="jobType" className="space-y-2" value={job_type} onValueChange={setjobtype} >
            <CheckboxGroup.Item value="Remote">Remote</CheckboxGroup.Item>
            <CheckboxGroup.Item value="On-site">On-Site</CheckboxGroup.Item>
            <CheckboxGroup.Item value="Hybrid">Hybrid</CheckboxGroup.Item>
          </CheckboxGroup.Root>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Employement Type</label>
        <div className="border rounded px-3 py-2 space-y-1">
          <CheckboxGroup.Root  name="empType" className="space-y-2" value={emp_type} onValueChange={setemptype}>
            <CheckboxGroup.Item value="Full-time">Fulltime</CheckboxGroup.Item>
            <CheckboxGroup.Item value="Contract">Contract</CheckboxGroup.Item>
            <CheckboxGroup.Item value="Internship">Internship</CheckboxGroup.Item>
          </CheckboxGroup.Root>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Annual Salary</label>
        <input
          type="text"
          min={1}
          max={10}
          className="w-full h-8 border border-gray-600 p-3 rounded-md"
          value={salary}
          onChange={(e)=>setsalary(Number(e.target.value))}
        />
        {/* <div className="flex justify-between text-xs text-gray-600">
          <span>Low</span>
          <span>High</span>
        </div> */}
      </div>
      <div className='w-full flex gap-2 justify-center'>
        <button onClick={handelfilter} className='h-8 w-1/2  text-white bg-blue-950 rounded'>Go</button>
      <button onClick={handelreset} className='h-8 w-1/2  text-white bg-blue-950 rounded'>Reset</button>
      </div>
      <div className="flex justify-center items-center gap-6 mt-10 text-black">
        {page <= 1 ? (
          <button
            disabled
            className="text-lg font-semibold px-4 py-2 bg-gray-200 border border-gray-300 rounded text-gray-500 shadow-xl cursor-not-allowed"
          >
            &laquo; Prev
          </button>
        ) : (
          <button
          onClick={()=>setpage(page-1)}
            className="text-lg font-semibold px-4 py-2 bg-white border border-gray-300 rounded hover:bg-blue-100 hover:text-blue-950 shadow-xl"
          >
            &laquo; Prev
          </button>
        )}

        <span className="text-lg font-bold text-blue-950">Page {page}</span>

        {page >= 3 ? (
          <button
            disabled
            className="text-lg font-semibold px-4 py-2 bg-gray-200 border border-gray-300 rounded text-gray-500 shadow-xl cursor-not-allowed"
          >
            Next &raquo;
          </button>
        ) : (
          <button
            onClick={()=>setpage(page+1)}
            className="text-lg font-semibold px-4 py-2 bg-white border border-gray-300 rounded hover:bg-blue-100 hover:text-blue-950 shadow-xl"
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
    <button onClick={()=>setfilteropen(true)} className={`md:hidden ${filteropen && 'hidden'}`}>Filter</button>
   </>
  );
}

export default Sidebar;
