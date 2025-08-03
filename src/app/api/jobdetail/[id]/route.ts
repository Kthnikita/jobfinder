//@ts-nocheck
import prismaclient from "@/service/prisma";
import { Params } from "next/dist/server/request/params";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}){
    const id=params.id;
  try{
      const job=await prismaclient.job.findUnique({
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