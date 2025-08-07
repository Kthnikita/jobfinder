//@ts-nocheck
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
if(Application.length==0)return null;
console.log(Application)
  return (
    <div>
        <h1 >Applied job</h1>
        {Application.map((val)=>{
            return (
                <div key={val.id}>
                    <Card jobs={[val.job]}/>
                </div>
            )
        })}
    </div>
  )
}

export default page
