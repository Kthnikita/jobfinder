import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   const resp=await req.json();
   const db=await prismaclient.job.create({
      data:resp
   })
   return NextResponse.json({
    success:true,
    job:db
   })
}
export async function GET(req:NextRequest){
   const db=await prismaclient.job.findMany();
   return NextResponse.json({
      success:true,
      job:db
   })
}