// @ts-nocheck
'use client'
import Card from "@/components/card";
import Link from "next/link";
import { useContext } from "react";
import { context } from "./layout";

// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "5613e90fe5msh9918793778e7529p174db3jsn849089fa8874",
//     "x-rapidapi-host": "jsearch.p.rapidapi.com",
//   },
// };

export default function Home({ searchParams }) {
  const{user,setuser}=useContext(context)
  // let page = parseInt(searchParams.page) || 1;
  // let info = [];

  // const url = `https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=${page}&num_pages=1&country=us&date_posted=all`;
  
  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   info = result?.data;
  //   console.log(result);
  // } catch (error) {
  //   console.error("Failed to fetch jobs:", error);
  // }
// const request=await fetch("http://localhost:3000/api/job");
// const resl=await request.json();
// const data=resl?.job;
  return (
    <div >
      <div className='h-[400px] w-auto flex md:flex-row flex-wrap shadow-md shadow-blue-950'>
        <div className='w-1/2 flex flex-col justify-center h-[100%] gap-3 pl-38 flex-wrap'>
           <h1 className='text-5xl font-semibold text-blue-950'>Unlock <span className='text-5xl font-semibold  text-black'>Ambition</span></h1>
           <p className='text-md text-gray-500'>Apply to a plethora of hiring opportunities & work with your dream companies!</p>
           <div className='flex gap-3 mt-4'>
            <Link className='w-24 h-10 p-2 text-center text-white rounded-xl bg-blue-950' href="/alljob">Find Jobs</Link>
            {user?.company && <Link href="/addjob" className='w-28 h-10 p-1 text-center text-blue-950 rounded-xl border border-blue-950 text-md hover:bg-blue-600'>+ Post Jobs</Link>}
           </div>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/67c821501ca0d_jobs_header_img.png?d=1000x600" alt="" className='w-[500px] h-[300px]'/>
        </div>
      </div>
      

     

      {/* <div className="flex justify-center items-center gap-6 mt-10 text-black">
        <Link
          href={`/?page=${page > 1 ? page - 1 : 1}`}
          className="text-lg font-semibold px-4 py-2 bg-white border border-gray-300 rounded hover:bg-blue-100 hover:text-blue-700 shadow-xl shadow-blue-800"
        >
          &laquo; Prev
        </Link>

        <span className="text-lg font-bold text-white">Page {page}</span>

        <Link
          href={`/?page=${page + 1}`}
          className="text-lg font-semibold px-4 py-2 bg-white border border-gray-300 rounded hover:bg-blue-100 hover:text-blue-700 shadow-xl"
        >
          Next &raquo;
        </Link>
      </div> */}
    </div>
  );
}
