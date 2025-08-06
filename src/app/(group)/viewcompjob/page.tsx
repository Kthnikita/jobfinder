//@ts-nocheck
import { Context } from "react"
async function page({searchParams}) {
  const id=searchParams.id
  const request=await fetch("http://localhost:3000/api/view_company/"+id);
  const resp=await request.json();
  const data=resp?.data.jobs
  return (
    <div>
      {data.map((val)=>{
        return(
          <div key={val.id}>
            <h1>{val.title}</h1>
            <p>{val.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default page
