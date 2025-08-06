
import Deletecomp from "@/components/deletecomp";
import Editcomp from "@/components/Editcomp";
import Link from "next/link";
import Companyreviews from "@/components/companyreviews";
type typeparam=Promise<{
  id:string
}>
async function page({ params }:{params:typeparam}) {
  const waitparam=await params;
  const id = waitparam.id;
  const request = await fetch("http://localhost:3000/api/view_company/" + id);
  const resp = await request.json();
  const data = resp.data;

  const review = await fetch("http://localhost:3000/api/review/" + id);
  const companyreview = await review.json();
  console.log(companyreview);
  const allreview = companyreview.allreview;
   console.log(allreview);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:w-1/3">
            <img
              src={data.img_url}
              alt={`${data.name} logo`}
              className="h-32 w-32 rounded-full border-2 border-blue-600 shadow-lg"
            />
            <h1 className="text-2xl font-bold mt-4 text-gray-800">{data.name}</h1>
            <p className="text-sm text-gray-600">Owned by: <span className="font-medium">{data.owner.name}</span></p>
            <div className="flex gap-3 mt-4">
              <Deletecomp id={id} />
              <Editcomp id={id} />
            </div>
            <div className="flex flex-col gap-2 mt-4 w-full">
              <Link
                href={`/viewcompjob?id=${id}`}
                className="w-full text-center py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition"
              >
                View Jobs
              </Link>
              <Link
                href="/addjob"
                className="w-full text-center py-2 border border-blue-950 text-blue-950 rounded-lg hover:bg-blue-900 hover:text-white transition"
              >
                + Post Job
              </Link>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">About Company</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
          </div>
        </div>

    
        <div className="mt-10">
          <Companyreviews company={data} compreview={allreview} />
        </div>
      </div>
    </div>
  );
}

export default page;
