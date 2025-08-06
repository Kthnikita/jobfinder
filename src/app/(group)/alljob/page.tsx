
import Card from "@/components/card";
import Link from "next/link";
async function page({ searchParams}:{searchParams:any}) {
  const page = parseInt(searchParams.page) || 1;
  const request = await fetch(`http://localhost:3000/api/job?page=${page}`);
  const resl = await request.json();
  const data = resl?.job;
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mt-8">
        FIND JOBS
      </h1>
      <Card jobs={data} />
      <div className="flex justify-center items-center gap-6 mt-10 text-black">
        {page <= 1 ? (
          <button
            disabled
            className="text-lg font-semibold px-4 py-2 bg-gray-200 border border-gray-300 rounded text-gray-500 shadow-xl cursor-not-allowed"
          >
             Prev
          </button>
        ) : (
          <Link
            href={`/alljob?page=${page > 1 ? page - 1 : 1}`}
            className="text-lg font-semibold px-4 py-2 bg-white border border-gray-300 rounded hover:bg-blue-100 hover:text-blue-950 shadow-xl"
          >
            Prev
          </Link>
        )}

        <span className="text-lg font-bold text-blue-950">Page {page}</span>

        {page >= 3 ? (
          <button
            disabled
            className="text-lg font-semibold px-4 py-2 bg-gray-200 border border-gray-300 rounded text-gray-500 shadow-xl cursor-not-allowed"
          >
            Next 
          </button>
        ) : (
          <Link
            href={`/alljob?page=${page < 3 ? page + 1 : 3}`}
            className="text-lg font-semibold px-4 py-2 bg-white border border-gray-300 rounded hover:bg-blue-100 hover:text-blue-950 shadow-xl"
          >
            Next 
          </Link>
        )}
      </div>
    </div>
  );
}

export default page;
