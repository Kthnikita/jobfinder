//@ts-nocheck
import prismaclient from "@/service/prisma"
async function page() {
    const data=await prismaclient.company.findMany({
        include:{
            owner:true
        }
    });
  return (
    <div>
      <h1>ALL COMPANIES</h1>
      <div>
        {data.map((val,ind)=>{
         return(
             <div key={ind} className="w-[700px] h-[200px]">
            <div className="flex justify-between">
                <h1>{val.name} <br />owned by:{val.owner.name}</h1>
                <img src={val.img_url} alt="" className="w-28 h-28"/>
            </div>
            <p>{val.description}</p>
          </div>
         )
        })}
      </div>
    </div>
  )
}

export default page
