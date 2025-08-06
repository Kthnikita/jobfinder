
import prismaclient from "@/service/prisma";
import Link from "next/link";

async function page() {
  const data = await prismaclient.company.findMany({
    include: {
      owner: true,
    },
  });

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">All Companies</h1>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {data.map((val) => (
          <div
            key={val.id}
            className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {val.name}
                </h2>
                <p className="text-sm text-gray-500">Owned by: {val.owner.name}</p>
              </div>
              {val?.img_url && <img
                src={val.img_url}
                alt={val.name}
                className="w-20 h-20 object-contain rounded"
              />}
            </div>

            <p className="mt-4 text-gray-600">{val.description}</p>

            <div className="mt-6 flex gap-4 justify-end">
              <Link href={`/viewcompany/${val.id}`} className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600">
                All Jobs
              </Link>
              <Link href={`/viewcompany/${val.id}`}  className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-600">
                Visit Us
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;

