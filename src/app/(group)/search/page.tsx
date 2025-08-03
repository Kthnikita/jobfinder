//@ts-nocheck
import Sidebar from "@/components/sidebar";
import Link from "next/link";
import Card from "@/components/card";
import prismaclient from "@/service/prisma";
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5613e90fe5msh9918793778e7529p174db3jsn849089fa8874',
		'x-rapidapi-host': 'jsearch.p.rapidapi.com'
	}
};
async function page({searchParams}) {
    const searchjob=searchParams.q;
    const page=parseInt(searchParams.page) || 1;
    const salary=searchParams.sal?Number.parseInt(searchParams.sal):0;
    // const url = `https://jsearch.p.rapidapi.com/search?query=${searchjob}%20jobs%20in%20chicago&page=${page}&num_pages=2&country=us&date_posted=all`;
   const req=await fetch(`http://localhost:3000/api/search?q=${searchjob}&sal=${salary}`)
   const resp=await req.json();
   const info=resp?.data;
   console.log(info)
// try {
// 	resp = await prismaclient.job.findMany({
//     where:{
//       title:{
//         contains:searchjob,
//         mode:"insensitive"
//       }
//     }
//   })
// 	// const result = await response.json();
//   //   console.log(result);
//   //   info=result?.data;
//   //    console.log(info)
// } catch (error) {
// 	console.error(error);
// }
  return (
    <div>

     <div className="flex gap-6">
     <div className="ml-10">
       <Sidebar/>
     </div>
      <Card jobs={info}/>
     </div>
      <div className="flex gap-4 w-full h-10 justify-center items-center mt-6"><Link href={`/search?page=${page>1?page-1:1}`} className="text-xl font-bold hover:text-blue-800">{`<<`}</Link>{page}<Link href={`/search?page=${page+1}`} className="text-xl font-bold hover:text-blue-800">{`>>`}</Link></div>
    </div>
   
  )
}

export default page
