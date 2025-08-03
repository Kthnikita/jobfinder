//@ts-nocheck
'use client'
import { CheckboxGroup } from '@radix-ui/themes';
import React, { useState } from 'react';
import { FunnelX } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
//gte work with number and salary for greater than
function Sidebar() {
  const router=useRouter()
  const search =useSearchParams();
  const q=search.get('q');
  // const loc=search.get('loc');
  // const jobtype=search.get('jt');
  // const sal=search.get('sal');
  // const[location,setloaction]=useState(loc||'delhi');
  // const[job_type,setjobtype]=useState(jobtype||'');
  const[salary,setsalary]=useState(10000);
  function handelfilter(){
   const url=`/search?q=${q}&sal=${salary}`
   router.push(url);
  }
  return (
    <div className="w-full sm:w-64 p-6 bg-white shadow-lg rounded-md mt-6 flex flex-col gap-6 border border-gray-200">
    
      <h1 className="text-lg font-semibold flex items-center gap-2 text-blue-900">
        <FunnelX size={20} />
        Filter
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
          // value={location}
          // onChange={(e)=>setloaction(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Job Type</label>
        <div className="border rounded px-3 py-2 space-y-1">
          <CheckboxGroup.Root  name="jobType" className="space-y-2" >
            <CheckboxGroup.Item value="Remote">Remote</CheckboxGroup.Item>
            <CheckboxGroup.Item value="Hybrid">Hybrid</CheckboxGroup.Item>
            <CheckboxGroup.Item value="Part-time">Part-time</CheckboxGroup.Item>
          </CheckboxGroup.Root>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Annual Salary</label>
        <input
          type="text"
          min={1}
          max={10}
          className="w-full bg-blue-700"
          value={salary}
          onChange={(e)=>setsalary(Number(e.target.value))}
        />
        {/* <div className="flex justify-between text-xs text-gray-600">
          <span>Low</span>
          <span>High</span>
        </div> */}
      </div>
      <button onClick={handelfilter}>Go</button>
    </div>
  );
}

export default Sidebar;
