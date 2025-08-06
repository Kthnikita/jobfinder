
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

export async function DELETE(req:NextRequest,{params}:{params:typeparam}){
    const param=await params;
    const id=param.id;
    try{
        const resp=await prismaclient.application.delete({
            where:{
                id:id
            }
        })
        return NextResponse.json({
            success:true
        })
    }
    catch(e:any){
        return NextResponse.json({
            success:false
        })
    }
}