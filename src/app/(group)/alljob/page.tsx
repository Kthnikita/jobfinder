//@ts-nocheck
import Card from '@/components/card';
async function page() {
  const request=await fetch("http://localhost:3000/api/job");
const resl=await request.json();
const data=resl?.job;
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mt-8">
        FIND JOBS
      </h1>
       <Card jobs={data} />
    </div>
  )
}

export default page
