
import Sidebar from "@/components/sidebar";
import Link from "next/link";
import Card from "@/components/card";
import prismaclient from "@/service/prisma";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "5613e90fe5msh9918793778e7529p174db3jsn849089fa8874",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
};
type sp= Promise<{
  q:string,
  page:string,
  sal:string,
  jt:string
  et:string,
  loc:string
}>
async function page({ searchParams }:{searchParams:sp}) {
  const searchparam=await searchParams
  const searchjob = searchparam.q||"";
  const page = parseInt(searchparam.page) || 1;
  const salary = searchparam.sal ? Number.parseInt(searchparam.sal) : 0;
  const jt = searchparam.jt ? searchparam.jt.split(",") : [];
  const et = searchparam.et ? searchparam.et.split(",") : [];
  const loc = searchparam.loc || "";
  const req = await fetch(
    `http://localhost:3000/api/search?q=${searchjob}&sal=${salary}&jt=${jt.join(",")}&et=${et.join(",")}&loc=${loc}`
  );
  const resp= await req.json();
  const info=resp?.data;
  console.log(info)
  // try {
  // 	resp = await prismaclient.openings.findMany({
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
        <div className="md: flex ml-10">
          <Sidebar />
            <Card jobs={info} />
        </div>
      
      </div>
      {/* <div className="flex gap-4 w-full h-10 justify-center items-center mt-6">
        <Link
          href={`/search?page=${page > 1 ? page - 1 : 1}`}
          className="text-xl font-bold hover:text-blue-800"
        >{`<<`}</Link>
        {page}
        <Link
          href={`/search?page=${page + 1}`}
          className="text-xl font-bold hover:text-blue-800"
        >{`>>`}</Link>
      </div> */}
    </div>
  );
}

export default page;
