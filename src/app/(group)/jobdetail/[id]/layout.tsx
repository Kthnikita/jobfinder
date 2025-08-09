
import { MapPin, SquarePlay, Banknote, Bookmark } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Editdeljob from "@/components/editdeljob";
import Applybtn from "@/components/applybtn";
import { getusercookie } from "@/helper";
import prismaclient from "@/service/prisma";
import Application_del_btn from "@/components/Application_del_btn";
import Viewapplicants from "@/components/viewapplicants";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "5613e90fe5msh9918793778e7529p174db3jsn849089fa8874",
//     "x-rapidapi-host": "jsearch.p.rapidapi.com",
//   },
// };
import ApplyDelapplication from "@/components/ApplyDelapplication";
type typeparam=Promise<{
  id:string
}>
export default async function layout({ params }:{params:typeparam}) {
  const waitparam=await params
  const jobId = waitparam.id;
  // const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}&country=us`;
  // let info = null;
  const request=await fetch("http://localhost:3000/api/jobdetail/"+jobId);
const resp=await request.json();
if(!resp?.success){
 notFound()
}
const info=resp.data;
const user=await getusercookie();
let userjobapply=false;
const data=await prismaclient.application.findFirst({
  where:{
    job_id:jobId,
    user_id:user?.id
  }
})

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   info = result?.data?.[0];
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }

  // if (!info) {
  //   return (
  //     <div className="p-8 text-center text-gray-600">
  //       <p>Job details not available. Please try again later.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            {info.title}
          </h1>
          <p className="text-lg font-medium text-gray-800">{info.title}</p>
          <p className="flex items-center gap-1 text-gray-600">
            <MapPin size={16} />
            {info.job_city || "Location not specified"}
          </p>
        </div>
        {info.employer_logo && (
          <img
            src=""
            alt="Logo"
            className="h-16 w-16 rounded-full object-cover border"
          />
        )}
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700">
            <SquarePlay size={20} />
            <span className="font-semibold">Start Date:</span>
          </div>
          <p className="ml-6 text-gray-600">Immediately</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700">
            <Banknote size={20} />
            <span className="font-semibold">CTC (Annual):</span>
          </div>
          <p className="ml-6 text-gray-600">
            {/* {info.job_min_salary || "N/A"} - {info.job_max_salary || "N/A"} {info.salary_currency || ""} */}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <Bookmark size={20} className="text-blue-700" />
        <Editdeljob job={info}/>
        <Viewapplicants job={info} />
        </div>
        <ApplyDelapplication id={info.id} data={data}/>
        {/* {!data && <Applybtn id={info.id}/>}
        {data && <Application_del_btn appid={data.id}/>} */}
      </div>
        
      <hr />
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">About the Job</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {info.description}
        </p>
      </div>
    </div>
  );
}
