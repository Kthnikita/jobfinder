import prismaclient from "@/service/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getusercookie } from "@/helper";
export async function GET(req:NextRequest){
    //   const usercookie=await cookies();
    //   const useremail=usercookie.get('token')?.value;
    // //   if(!useremail){
    // //     return NextResponse.json({
    // //         msg:"invalid user"
    // //     })
    // //   }
    //   const userdata=await prismaclient.user.findUnique({
    //     where:{
    //         email:useremail
    //     },
    //     omit:{
    //         password:true
    //     }
    //   })
    const userdata=await getusercookie();
      if(!userdata){
        return NextResponse.json({
            success:false
        })
      }
      const company=await prismaclient.company.findUnique({
        where:{
          ownerid:userdata.id
        }
      })
      const data={
        ...userdata,
        company
      }
      return NextResponse.json({
        success:true,
        data:data
      })
}