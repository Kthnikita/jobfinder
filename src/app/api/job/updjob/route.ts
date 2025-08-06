
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   const resp=await req.json();
   const db=await prismaclient.openings.update({
      where:{
        id:resp.id
      },
      data:resp.data
   })
   return NextResponse.json({
    success:true,
    job:db
   })
}