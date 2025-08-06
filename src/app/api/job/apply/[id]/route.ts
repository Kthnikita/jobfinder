
import { getusercookie } from "@/helper";
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";
type param = {
    id: string
}
export async function GET(req: NextRequest, { params }: { params: param }) {
     const curentuser = await getusercookie();
     if(!curentuser)return null;
     const id = params.id
     const obj = {
        user_id: curentuser?.id,
        job_id: id
     }
    try{
        const resp=await prismaclient.application.create({
        data:obj
    })
    return NextResponse.json({
        success:true
    })
    }
    catch(e:any){
        console.log(e.message)
        return NextResponse.json({
            success:false
        })
    }
}