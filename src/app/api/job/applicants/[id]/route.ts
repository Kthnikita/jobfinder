
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";
type typeparam=Promise<{
    id:string
}>
export async function GET(req:NextRequest,{params}:{params:typeparam}) {
    const param=await params;
    const id=param.id;
    const resp=await prismaclient.application.findMany({
        where:{
            job_id:id
        },
        include:{
            user:true
        }
    })
    return NextResponse.json({
        success:true,
        data:resp
    })
}