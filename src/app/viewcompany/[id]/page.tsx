
//@ts-nocheck
import Deletecomp from "@/components/deletecomp";
import {SquarePen} from 'lucide-react'
async function page({params}) {
  const id=params.id;
  const request=await fetch("http://localhost:3000/api/view_company/"+id);
  const resp=await request.json();;
  const data=resp.data;
  console.log(data);
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
  <div className="w-[350px] bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center gap-4 border border-gray-200">
    
    <img
      src={data.img_url}
      alt={`${data.name} logo`}
      className="h-24 w-24 rounded-full border-2 border-blue-500 shadow"
    />

    <h1 className="text-xl font-semibold text-gray-800">{data.name}</h1>
    <p className="text-sm text-gray-500">Owned by: <span className="font-medium text-gray-700">{data.owner.name}</span></p>
    <p className="text-center text-gray-600 text-sm px-2">{data.description}</p>

    <div className="flex gap-4 mt-2">
      <Deletecomp id={id} />
      <SquarePen className="cursor-pointer text-blue-600 hover:text-blue-800" />
    </div>

    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
      View All Jobs
    </button>
  </div>
</div>

  )
}

export default page
