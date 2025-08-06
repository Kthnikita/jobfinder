
import prismaclient from "@/service/prisma";
import { Params } from "next/dist/server/request/params";
import { NextRequest, NextResponse } from "next/server";
type typeparam=Promise<{
  id:string
}>
export async function GET(req:NextRequest,{params}:{params:typeparam}){
  const awaitparam=await params
    const id=awaitparam.id;
  try{
      const job=await prismaclient.openings.findUnique({
        where:{
            id:id
        }
    })
    if(!job){
        return NextResponse.json({
            success:false
        })
    }
    return NextResponse.json({
        success:true,
        data:job
    })
  }
  catch(e){
    console.log(e);
  }
}

export async function DELETE(req:NextRequest){
    
}