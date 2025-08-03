//@ts-nocheck
'use client'
import Link from "next/link"
import { useContext, useState } from "react"
import { savecontext } from "./theme";
import { context } from "@/app/(group)/layout";
function Card({jobs}) {
    const {save,setsave}=useContext(savecontext)
   const {user,setuser}=useContext(context)
  function handelsave(item){
    const present = save.find((e)=>e.job_id==item.job_id);
    if(present){
      const newsave=save.filter((e)=>e.job_id!=item.job_id);
      setsave(newsave)
    }
    else{
      setsave((prev)=>[...prev,item]);
    }
  }
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10 ">
       {jobs?.map((val,ind)=>{
        return (
            <div key={ind} className="h-[300px] w-[300px] flex flex-col gap-2 rounded-xl text-black shadow-blue-900 shadow-md hover:shadow-lg bg-white p-4">
              
               <div className="flex">
                <h1 className="font-bold text-md text-black truncate mt-2">{val.title}</h1> 
                {/* <img src={val.employer_logo} alt="" className="w-12 h-12 rounded-full"/> */}
               </div>
                <div className="m-2">
                    <p className="text-sm line-clamp-4">{val.description}</p>
                </div>
                 <div className="flex justify-between">
                  <p className="text-md text-gray-400">{val.location}</p>
                 {/* <a href={val.job_apply_link} className="text-md text-blue-500">Apply</a> */}
                 </div>
             <div className='flex gap-3 w-[100%] justify-center mt-4'>
      <Link href={`/jobdetail/${val.id}`} className='bg-blue-500 text-white h-8 w-28 rounded text-center p-1'>View Details</Link>
      {user?.role=="user" && <button onClick={()=>{handelsave(val)
      }} className='bg-blue-500 text-white h-8 w-24 rounded text-center p-1'>{save.find((e)=>e.id==val.id)?"unsave":"Save"}</button>}
    </div>
            </div>
        )
      })}
    </div>
  )
}

export default Card
