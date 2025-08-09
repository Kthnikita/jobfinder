
import { useContext } from "react"
import { context } from "../layout"
import { getusercookie } from "@/helper"
import prismaclient from "@/service/prisma";
import Card from "@/components/card";
async function page() {
const user=await getusercookie();
if(!user)return null;
const Application=await prismaclient.application.findMany({
    where:{
        user_id:user.id
    },
    include:{
        job:{
            include:{
                comp:true
            }
        }
    }
})
if (Application.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h1 className="text-xl font-semibold">No applications found</h1>
        <p className="mt-2">You haven’t applied to any jobs yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-900 mb-4 w-full flex justify-center">Applied Jobs</h1>
      {Application.map(({ id, job }) => (
        <div key={id}>
          <Card jobs={[job]} />
        </div>
      ))}
    </div>
  );
}

export default page
