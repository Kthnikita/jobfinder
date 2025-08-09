
'use client'
import Card from "@/components/card";
import Link from "next/link";
import { useContext } from "react";
import { context } from "./layout";
import TickerBar from "@/components/ui/Tickerbar";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "5613e90fe5msh9918793778e7529p174db3jsn849089fa8874",
//     "x-rapidapi-host": "jsearch.p.rapidapi.com",
//   },
// };

export default function Home() {
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
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center shadow-md shadow-blue-950 px-6 py-8 bg-white w-full max-w-screen">
  
  <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 mb-6 md:mb-0">
    <h1 className="text-4xl md:text-5xl font-semibold text-blue-950 leading-tight ml-8">
      Unlock <span className="text-black">Your Career</span>
    </h1>
    <p className="text-md text-gray-500 max-w-md ml-8">
      Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
    </p>
    <div className="flex gap-3 mt-4 flex-wrap ml-8">
        <Link href="/alljob" className="px-4 py-2 text-white rounded-xl bg-blue-950 text-sm text-center">
          Find Jobs
        </Link>
      {user?.company? (
        <Link
          href="/addjob"
          className="px-4 py-2 text-blue-950 rounded-xl border border-blue-950 text-sm text-center hover:bg-blue-600 hover:text-white transition"
        >
          + Post Jobs
        </Link>
      ):<Link
          href={user?"/addcompany":"/login"}
          className="px-4 py-2 text-blue-950 rounded-xl border border-blue-950 text-sm text-center hover:bg-blue-600 hover:text-white transition"
        >
          + Add Company
        </Link>}
    </div>
  </div>

 
  <div className="w-full md:w-1/2 flex justify-center items-center">
    <img
      src="https://d8it4huxumps7.cloudfront.net/uploads/images/67c821501ca0d_jobs_header_img.png?d=1000x600"
      alt="Jobs"
      className="w-full max-w-md h-auto object-contain"
    />
  </div>
</div>

     
<TickerBar/>
<div
  onClick={() => window.location.href = "viewcompany/allcompany"}
  className="mt-10 mx-auto w-72 h-40 rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg hover:bg-blue-50 transition cursor-pointer flex flex-col justify-center items-center"
>
  <h2 className="text-xl font-bold text-blue-900 mb-2">View All Companies</h2>
  <p className="text-sm text-gray-600 text-center px-4">Click to see all available companies with details.</p>
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
